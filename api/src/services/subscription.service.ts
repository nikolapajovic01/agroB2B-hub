import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class SubscriptionService {
  // Set trial period for new company (7 days by default)
  static async startTrial(companyId: number, trialDays: number = 7) {
    const trialEndDate = new Date()
    trialEndDate.setDate(trialEndDate.getDate() + trialDays)

    return await prisma.company.update({
      where: { id: companyId },
      data: {
        subscriptionStatus: 'trial',
        trialEndDate,
        isPaid: false
      }
    })
  }

  // Activate paid subscription
  static async activateSubscription(
    companyId: number, 
    durationMonths: number = 1
  ) {
    const now = new Date()
    const subscriptionEndDate = new Date()
    subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + durationMonths)

    return await prisma.company.update({
      where: { id: companyId },
      data: {
        subscriptionStatus: 'active',
        subscriptionStartDate: now,
        subscriptionEndDate,
        isPaid: true,
        trialEndDate: null // Clear trial date when paid
      }
    })
  }

  // Cancel subscription
  static async cancelSubscription(companyId: number) {
    return await prisma.company.update({
      where: { id: companyId },
      data: {
        subscriptionStatus: 'cancelled',
        isPaid: false
      }
    })
  }

  // Check if subscription is expired and update status
  static async checkAndUpdateExpiredSubscriptions() {
    const now = new Date()
    
    // Update expired paid subscriptions
    await prisma.company.updateMany({
      where: {
        subscriptionStatus: 'active',
        subscriptionEndDate: {
          lt: now
        }
      },
      data: {
        subscriptionStatus: 'expired',
        isPaid: false
      }
    })

    // Update expired trials
    await prisma.company.updateMany({
      where: {
        subscriptionStatus: 'trial',
        trialEndDate: {
          lt: now
        }
      },
      data: {
        subscriptionStatus: 'expired',
        isPaid: false
      }
    })
  }

  // Get subscription info for company
  static async getSubscriptionInfo(companyId: number) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      select: {
        subscriptionStatus: true,
        subscriptionStartDate: true,
        subscriptionEndDate: true,
        trialEndDate: true,
        isPaid: true,
        createdAt: true
      }
    })

    if (!company) {
      throw new Error('Company not found')
    }

    const now = new Date()
    let hasAccess = false
    let daysRemaining = 0

    if (company.subscriptionStatus === 'active' && company.subscriptionEndDate) {
      hasAccess = company.subscriptionEndDate > now
      if (hasAccess) {
        daysRemaining = Math.ceil((company.subscriptionEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      }
    } else if (company.subscriptionStatus === 'trial' && company.trialEndDate) {
      hasAccess = company.trialEndDate > now
      if (hasAccess) {
        daysRemaining = Math.ceil((company.trialEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      }
    }

    return {
      ...company,
      hasAccess,
      daysRemaining
    }
  }

  // Extend trial period (admin function)
  static async extendTrial(companyId: number, additionalDays: number) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      select: { trialEndDate: true }
    })

    if (!company) {
      throw new Error('Company not found')
    }

    const newTrialEndDate = company.trialEndDate 
      ? new Date(company.trialEndDate.getTime() + (additionalDays * 24 * 60 * 60 * 1000))
      : new Date(Date.now() + (additionalDays * 24 * 60 * 60 * 1000))

    return await prisma.company.update({
      where: { id: companyId },
      data: {
        trialEndDate: newTrialEndDate,
        subscriptionStatus: 'trial'
      }
    })
  }
}