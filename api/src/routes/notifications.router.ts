import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import { getNotifications } from '../controllers/notifications.controller'

const router = Router()

router.get('/', authMiddleware, getNotifications)

export default router
