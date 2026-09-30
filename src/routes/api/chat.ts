import { createFileRoute } from '@tanstack/react-router';
import { handleFinanceChat } from '@/lib/ai-chat.server';
export const Route=createFileRoute('/api/chat')({server:{handlers:{POST:({request})=>handleFinanceChat(request)}}});
