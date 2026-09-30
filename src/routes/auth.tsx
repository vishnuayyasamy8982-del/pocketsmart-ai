import { createFileRoute } from '@tanstack/react-router';
import { Auth } from '@/components/pocket/auth';
export const Route=createFileRoute('/auth')({head:()=>({meta:[{title:'Sign in | PocketSmart AI'},{name:'description',content:'Securely access your personal finance workspace.'},{property:'og:title',content:'Sign in | PocketSmart AI'},{property:'og:description',content:'Your personal finance workspace.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Auth});
