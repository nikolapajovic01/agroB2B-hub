import { Request, Response, NextFunction } from 'express'
import { AiService } from '../services/ai.service'

const aiService = new AiService()

export const chat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { conversationId, message, systemPrompt } = req.body || {}

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'message is required' })
    }

    const response = await aiService.chat({ conversationId, message, systemPrompt })

    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}


