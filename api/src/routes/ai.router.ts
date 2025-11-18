import { Router } from 'express'
import { chat } from '../controllers/ai.controller'
import { authMiddleware } from '../middleware/auth'
import { simpleRateLimit } from '../middleware/rateLimit'

const router = Router()

router.post(
  '/chat',
  authMiddleware,
  simpleRateLimit({ windowMs: 60_000, max: 60, keyGenerator: (req) => (req as any).user?.id?.toString() || req.ip || 'global' }),
  chat
)

export default router


