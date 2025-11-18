export interface ChatRequestBody {
  conversationId?: string;
  message: string;
  systemPrompt?: string;
}

export interface ChatResponseBody {
  conversationId?: string;
  reply: string;
}

export async function chat(body: ChatRequestBody): Promise<ChatResponseBody> {
  const response = await fetch('/api/ai/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    credentials: 'include',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  return response.json();
}


