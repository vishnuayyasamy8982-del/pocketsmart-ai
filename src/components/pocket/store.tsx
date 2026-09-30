import type React from 'react';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { defaultPreferences, type Preferences, type Transaction, type Thread } from '@/lib/finance';
type Account = { id:string; name:string; email:string };
type Store = { ready:boolean; account:Account|null; transactions:Transaction[]; preferences:Preferences; goal:number; threads:Thread[]; saveTransaction:(item:Transaction)=>Promise<void>; deleteTransaction:(id:string)=>Promise<void>; setPreferences:(value:Preferences)=>void; setGoal:(value:number)=>void; createThread:()=>string; saveThread:(thread:Thread)=>void; deleteThread:(id:string)=>void };
// Keep one context instance across hot reloads so provider and consumers always match.
const ctxHost=globalThis as unknown as {__pocketCtx?:React.Context<Store|null>};
const Ctx=ctxHost.__pocketCtx ??= createContext<Store|null>(null);
const LOCAL:Account={id:'local',name:'There',email:''};
const K={tx:'ps-local-transactions',prefs:'ps-local-preferences',goal:'ps-local-goal',threads:'ps-local-threads'};
function load<T>(key:string,fallback:T):T{try{const v=localStorage.getItem(key);return v?JSON.parse(v) as T:fallback}catch{return fallback}}
const save=(key:string,value:unknown)=>{try{localStorage.setItem(key,JSON.stringify(value))}catch{/* storage full */}};
export function PocketProvider({children}:{children:ReactNode}) {
  const [ready,setReady]=useState(false);const [transactions,setTransactions]=useState<Transaction[]>([]);const [preferences,setPreferencesState]=useState<Preferences>(defaultPreferences);const [goal,setGoalState]=useState(0);const [threads,setThreads]=useState<Thread[]>([]);const threadsRef=useRef<Thread[]>([]);
  useEffect(()=>{setTransactions(load<Transaction[]>(K.tx,[]));setPreferencesState({...defaultPreferences,...load<Partial<Preferences>>(K.prefs,{})});setGoalState(load<number>(K.goal,0));const t=load<Thread[]>(K.threads,[]);threadsRef.current=t;setThreads(t);setReady(true)},[]);
  const updateThreads=(next:Thread[])=>{threadsRef.current=next;setThreads(next);save(K.threads,next)};
  const saveTransaction=async(item:Transaction)=>{setTransactions(current=>{const id=current.some(x=>x.id===item.id)&&item.id?item.id:(item.id||crypto.randomUUID());const next=[{...item,id},...current.filter(x=>x.id!==item.id)].sort((a,b)=>b.date.localeCompare(a.date));save(K.tx,next);return next})};
  const deleteTransaction=async(id:string)=>{setTransactions(current=>{const next=current.filter(x=>x.id!==id);save(K.tx,next);return next})};
  return <Ctx.Provider value={{ready,account:ready?LOCAL:null,transactions,preferences,goal,threads,saveTransaction,deleteTransaction,setPreferences:(value)=>{setPreferencesState(value);save(K.prefs,value)},setGoal:(value)=>{setGoalState(value);save(K.goal,value)},createThread:()=>{const id=crypto.randomUUID();updateThreads([{id,title:'New conversation',updatedAt:Date.now(),messages:[]},...threadsRef.current]);return id},saveThread:(thread)=>updateThreads([thread,...threadsRef.current.filter(x=>x.id!==thread.id)]),deleteThread:(id)=>updateThreads(threadsRef.current.filter(x=>x.id!==id))}}>{children}</Ctx.Provider>
}
export function usePocket(){const context=useContext(Ctx);if(!context)throw new Error('PocketProvider missing');return context}
