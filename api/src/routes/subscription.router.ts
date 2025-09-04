import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import { checkSubscription } from '../middleware/subscription.middleware'
import {
  getSubscriptionInfo,
  startTrial,
  activateSubscription,
  cancelSubscription,
  extendTrial,
  checkExpiredSubscriptions
} from '../controllers/subscription.controller'

const router = Router()

// User routes (require authentication)
router.get('/info', authMiddleware, checkSubscription, getSubscriptionInfo)
router.post('/trial', authMiddleware, startTrial)
router.post('/activate', authMiddleware, activateSubscription)
router.post('/cancel', authMiddleware, cancelSubscription)

// Admin routes (add admin middleware when you implement it)
router.post('/admin/extend-trial', extendTrial)
router.post('/admin/check-expired', checkExpiredSubscriptions)

export default router