import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId, withLovableAiGatewayRunIdHeader } from './ai-run-id.server';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/integrations/supabase/types';
export async function handleFinanceChat(request:Request){
 const key=process.env['LOVABLE_API_KEY'];const url=process.env['SUPABASE_URL'];const publicKey=process.env['SUPABASE_PUBLISHABLE_KEY'];if(!key||!url||!publicKey)return Response.json({message:'AI is temporarily unavailable.'},{status:503});
 const bearer=request.headers.get('Authorization')?.replace(/^Bearer\s+/i,'');if(!bearer)return Response.json({message:'Please sign in to chat.'},{status:401});
 const client=createClient<Database>(url,publicKey,{auth:{persistSession:false,autoRefreshToken:false},global:{headers:{Authorization:`Bearer ${bearer}`},fetch:(input,init)=>{const headers=new Headers(init?.headers);headers.set('apikey',publicKey);return fetch(input,{...init,headers})}}});
 const {data:{user},error:authError}=await client.auth.getUser(bearer);if(authError||!user)return Response.json({message:'Please sign in to chat.'},{status:401});
 let body:{messages?:UIMessage[]};try{body=await request.json()}catch{return Response.json({message:'Invalid request.'},{status:400})}
 const messages=body.messages;if(!Array.isArray(messages)||!messages.length||messages.length>100||JSON.stringify(messages).length>180000||messages.some(m=>!['user','assistant'].includes(m.role)))return Response.json({message:'Conversation is too long or invalid.'},{status:400});
 const {data:rows,error}=await client.from('finance_transactions').select('title,category,amount,type,transaction_date').eq('user_id',user.id).order('transaction_date',{ascending:false}).limit(200);if(error)return Response.json({message:'Could not load your finances.'},{status:500});
 const {data:settings}=await client.from('pocket_settings').select('goal_saved').eq('user_id',user.id).maybeSingle();
 const runIdFetch=createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));const provider=createOpenAI({baseURL:'https://ai.gateway.lovable.dev/v1',apiKey:key,headers:{'Lovable-API-Key':key,'X-Lovable-AIG-SDK':'vercel-ai-sdk'},fetch:runIdFetch.fetch});
 const result=streamText({model:provider.responses('openai/gpt-6-astra'),system:`You are PocketBrain, a careful, warm personal finance assistant. Today is ${new Date().toISOString().slice(0,10)}. Use ONLY the account's actual records provided here; never invent transactions, balances, income, or trends. Clarify when data is insufficient. Currency is INR. Avoid definitive investment/tax advice. Keep answers concise with specific calculations where useful. Recorded transactions: ${JSON.stringify(rows??[])}. Laptop goal saved: ${settings?.goal_saved??0} INR, target 70000 INR.`,messages:await convertToModelMessages(messages),abortSignal:request.signal,providerOptions:{openai:{store:false,forceReasoning:true,reasoningEffort:'medium',reasoningSummary:'auto',include:['reasoning.encrypted_content']}}});
 return withLovableAiGatewayRunIdHeader(result.toUIMessageStreamResponse({sendReasoning:true}),runIdFetch);
}
