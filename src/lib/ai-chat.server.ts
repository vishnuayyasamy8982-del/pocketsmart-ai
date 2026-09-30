import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, type UIMessage } from 'ai';
import { createLovableAiGatewayRunIdFetch, getLovableAiGatewayRunId, withLovableAiGatewayRunIdHeader } from './ai-run-id.server';
export async function handleFinanceChat(request:Request){
  const key=process.env['LOVABLE_API_KEY'];if(!key)return Response.json({message:'AI is temporarily unavailable.'},{status:503});
  let body:{messages?:UIMessage[];transactions?:unknown;goal?:unknown};try{body=await request.json()}catch{return Response.json({message:'Invalid request.'},{status:400})}
  const messages=body.messages;if(!Array.isArray(messages)||!messages.length||messages.length>100||JSON.stringify(messages).length>180000||messages.some(m=>!['user','assistant'].includes(m.role)))return Response.json({message:'Conversation is too long or invalid.'},{status:400});
  const rows=Array.isArray(body.transactions)?body.transactions.slice(0,200).map((x:Record<string,unknown>)=>({title:String(x['title']??'').slice(0,80),category:String(x['category']??'').slice(0,40),amount:Number(x['amount'])||0,type:x['type']==='income'?'income':'expense',date:String(x['date']??'').slice(0,10)})):[];
  const goal=Number(body.goal)||0;
  const runIdFetch=createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(request));const provider=createOpenAI({baseURL:'https://ai.gateway.lovable.dev/v1',apiKey:key,headers:{'Lovable-API-Key':key,'X-Lovable-AIG-SDK':'vercel-ai-sdk'},fetch:runIdFetch.fetch});
  const result=streamText({model:provider.responses('openai/gpt-6-astra'),system:`You are PocketBrain, a careful, warm personal finance assistant. Today is ${new Date().toISOString().slice(0,10)}. Use ONLY the user's actual records provided here; never invent transactions, balances, income, or trends. Clarify when data is insufficient. Currency is INR. Avoid definitive investment/tax advice. Keep answers concise with specific calculations where useful. Recorded transactions: ${JSON.stringify(rows)}. Laptop goal saved: ${goal} INR, target 70000 INR.`,messages:await convertToModelMessages(messages),abortSignal:request.signal,providerOptions:{openai:{store:false,forceReasoning:true,reasoningEffort:'medium',reasoningSummary:'auto',include:['reasoning.encrypted_content']}}});
  return withLovableAiGatewayRunIdHeader(result.toUIMessageStreamResponse({sendReasoning:true}),runIdFetch);
}
