import { Router } from 'express'
import { authMiddleware } from '../middleware/auth'
import { getNotifications } from '../controllers/notifications.controller'
// import { getNotifications, updateNotificationPreferences } from '../controllers/notifications.controller'

const router = Router()

router.get('/', authMiddleware, getNotifications)
router.get('/preferences', authMiddleware, getNotifications)
router.post('/preferences', authMiddleware)
// router.post('/preferences', authMiddleware, updateNotificationPreferences)

export default router
