import { Request, Response } from 'express'
import { SubscriptionService } from '../services/subscription.service'
import { AuthenticatedRequest } from '../middleware/subscription.middleware'

export const getSubscriptionInfo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user?.companyId) {
      return res.status(401).json({ error: 'Company not found' })
    }

    const subscriptionInfo = await SubscriptionService.getSubscriptionInfo(req.user.companyId)
    res.json(subscriptionInfo)
  } catch (error) {
    console.error('Get subscription info error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const startTrial = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user?.companyId) {
      return res.status(401).json({ error: 'Company not found' })
    }

    const { trialDays = 7 } = req.body
    const result = await SubscriptionService.startTrial(req.user.companyId, trialDays)
    res.json({ message: 'Trial started successfully', company: result })
  } catch (error) {
    console.error('Start trial error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const activateSubscription = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user?.companyId) {
      return res.status(401).json({ error: 'Company not found' })
    }

    const { durationMonths = 1 } = req.body
    const result = await SubscriptionService.activateSubscription(req.user.companyId, durationMonths)
    res.json({ message: 'Subscription activated successfully', company: result })
  } catch (error) {
    console.error('Activate subscription error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const cancelSubscription = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.user?.companyId) {
      return res.status(401).json({ error: 'Company not found' })
    }

    const result = await SubscriptionService.cancelSubscription(req.user.companyId)
    res.json({ message: 'Subscription cancelled successfully', company: result })
  } catch (error) {
    console.error('Cancel subscription error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

// Admin functions
export const extendTrial = async (req: Request, res: Response) => {
  try {
    const { companyId, additionalDays } = req.body
    
    if (!companyId || !additionalDays) {
      return res.status(400).json({ error: 'Company ID and additional days are required' })
    }

    const result = await SubscriptionService.extendTrial(companyId, additionalDays)
    res.json({ message: 'Trial extended successfully', company: result })
  } catch (error) {
    console.error('Extend trial error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const checkExpiredSubscriptions = async (req: Request, res: Response) => {
  try {
    await SubscriptionService.checkAndUpdateExpiredSubscriptions()
    res.json({ message: 'Expired subscriptions checked and updated' })
  } catch (error) {
    console.error('Check expired subscriptions error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}