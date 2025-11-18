import { OpenAIProvider, AiMessage } from '../providers/ai.provider'
import { prisma } from '../config/prisma'

export interface ChatRequest {
  conversationId?: number
  userId: number
  message: string
  systemPrompt?: string
}

export interface ChatResponse {
  conversationId: number
  reply: string
}

export class AiService {
  private provider: OpenAIProvider

  constructor(provider?: OpenAIProvider) {
    this.provider = provider || new OpenAIProvider()
  }

  async chat(input: ChatRequest): Promise<ChatResponse> {
    const system: AiMessage = {
      role: 'system',
      content: input.systemPrompt || 'You are a helpful assistant for the AgroB2B Hub.'
    }

    // Ensure conversation exists or create new
    let conversationId = input.conversationId
    if (!conversationId) {
      const created = await prisma.conversation.create({
        data: {
          userId: input.userId,
          title: input.message.slice(0, 64),
        },
      })
      conversationId = created.id
    }

    // Load recent history (last 20 messages)
    const history = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' },
      take: 50,
      select: { role: true, content: true },
    })

    const messages: AiMessage[] = [
      system,
      ...history.map(h => ({ role: h.role as 'user' | 'assistant' | 'system', content: h.content })),
      { role: 'user', content: input.message },
    ]

    // Save user message
    await prisma.message.create({
      data: { conversationId, role: 'user', content: input.message },
    })

    const reply = await this.provider.generate(messages)

    // Save assistant reply
    await prisma.message.create({
      data: { conversationId, role: 'assistant', content: reply },
    })

    return { conversationId, reply }
  }
}


