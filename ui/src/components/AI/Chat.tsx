import React, { useState } from 'react'
import { chat as chatApi } from '../../services/ai.service'

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState<string>('')
  const [isSending, setIsSending] = useState<boolean>(false)

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed || isSending) return

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmed,
    }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsSending(true)

    try {
      const res = await chatApi({ message: trimmed })
      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: res.reply,
      }
      setMessages(prev => [...prev, assistantMsg])
    } catch (e: any) {
      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: e?.message || 'Došlo je do greške.',
      }
      setMessages(prev => [...prev, assistantMsg])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="flex h-full w-full flex-col rounded-md border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="mb-3 text-lg font-semibold">AI Chat</div>
      <div className="flex-1 overflow-auto rounded-md border border-stroke p-3 dark:border-strokedark">
        {messages.length === 0 ? (
          <div className="text-sm text-gray-500">Pošalji poruku da započneš razgovor.</div>
        ) : (
          <div className="space-y-3">
            {messages.map(m => (
              <div key={m.id} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={`inline-block rounded px-3 py-2 text-sm ${m.role === 'user' ? 'bg-primary text-white' : 'bg-whiter dark:bg-meta-4 text-black dark:text-white'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-3 flex gap-2">
        <input
          className="flex-1 rounded border border-stroke px-3 py-2 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark dark:text-white"
          placeholder="Unesi poruku..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSend()
          }}
        />
        <button
          className="rounded bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-60"
          onClick={handleSend}
          disabled={isSending || !input.trim()}
        >
          Pošalji
        </button>
      </div>
    </div>
  )
}

export default Chat


