import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class SubscriptionService {

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
        isPaid: true
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
  }

  // Get subscription info for company
  static async getSubscriptionInfo(companyId: number) {
    const company = await prisma.company.findUnique({
      where: { id: companyId },
      select: {
        subscriptionStatus: true,
        subscriptionStartDate: true,
        subscriptionEndDate: true,
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

    if (company.subscriptionStatus === 'active' && company.subscriptionEndDate && company.isPaid) {
      hasAccess = company.subscriptionEndDate > now
      if (hasAccess) {
        daysRemaining = Math.ceil((company.subscriptionEndDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
      }
    }

    return {
      ...company,
      hasAccess,
      daysRemaining
    }
  }

}