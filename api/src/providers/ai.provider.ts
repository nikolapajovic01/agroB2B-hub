import OpenAI from 'openai'

export interface AiMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface AiProviderConfig {
  apiKey?: string
  model?: string
  temperature?: number
  maxTokens?: number
}

export class OpenAIProvider {
  private client: OpenAI
  private model: string
  private temperature: number
  private maxTokens?: number

  constructor(config?: AiProviderConfig) {
    const apiKey = config?.apiKey || process.env.OPENAI_API_KEY
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not set')
    }

    this.client = new OpenAI({ apiKey })
    this.model = config?.model || process.env.AI_MODEL || 'gpt-4o-mini'
    this.temperature = config?.temperature ?? Number(process.env.AI_TEMPERATURE ?? 0.2)
    const maxTokensEnv = process.env.AI_MAX_TOKENS
    this.maxTokens = config?.maxTokens ?? (maxTokensEnv ? Number(maxTokensEnv) : undefined)
  }

  async generate(messages: AiMessage[]): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: this.model,
      temperature: this.temperature,
      max_tokens: this.maxTokens,
      messages: messages.map(m => ({ role: m.role, content: m.content })),
    })

    const text = response.choices?.[0]?.message?.content?.trim() || ''
    return text
  }
}


