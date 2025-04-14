import { Request, Response } from 'express'
import { fetchNotificationsAfterTimestamp } from '../services/notifications.service'

export const getNotifications = async (req: Request, res: Response) => {
  try {
    const after = req.query.after
    const afterDate = after ? new Date(Number(after)) : new Date(0)

    const notifications = await fetchNotificationsAfterTimestamp(afterDate)
    res.json(notifications)
  } catch (error) {
    console.error('Error fetching notifications:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}
