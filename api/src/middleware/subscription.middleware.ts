import { Request, Response, NextFunction } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface AuthenticatedRequest extends Request {
  user?: {
    id: number
    companyId?: number
  }
}

export const checkSubscription = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user?.companyId) {
      return res.status(401).json({ error: 'Company not found' })
    }

    const company = await prisma.company.findUnique({
      where: { id: req.user.companyId },
      select: {
        subscriptionStatus: true,
        trialEndDate: true,
        subscriptionEndDate: true,
        isPaid: true
      }
    })

    if (!company) {
      return res.status(404).json({ error: 'Company not found' })
    }

    const now = new Date()
    let hasAccess = false

    // Check if company has active subscription
    if (company.subscriptionStatus === 'active' && company.subscriptionEndDate) {
      hasAccess = company.subscriptionEndDate > now
    }
    // Check if company is in trial period
    else if (company.subscriptionStatus === 'trial' && company.trialEndDate) {
      hasAccess = company.trialEndDate > now
    }

    // Add subscription info to request
    req.subscription = {
      hasAccess,
      status: company.subscriptionStatus,
      isPaid: company.isPaid,
      trialEndDate: company.trialEndDate,
      subscriptionEndDate: company.subscriptionEndDate
    }

    next()
  } catch (error) {
    console.error('Subscription check error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const requireSubscription = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (!req.subscription?.hasAccess) {
    return res.status(403).json({ 
      error: 'Subscription required',
      message: 'This feature requires an active subscription or trial period',
      subscription: req.subscription
    })
  }
  next()
}

// Extend Request interface to include subscription info
declare global {
  namespace Express {
    interface Request {
      subscription?: {
        hasAccess: boolean
        status: string
        isPaid: boolean
        trialEndDate: Date | null
        subscriptionEndDate: Date | null
      }
    }
  }
}