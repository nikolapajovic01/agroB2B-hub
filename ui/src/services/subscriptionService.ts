import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

export interface SubscriptionInfo {
  subscriptionStatus: string
  subscriptionStartDate: string | null
  subscriptionEndDate: string | null
  trialEndDate: string | null
  isPaid: boolean
  hasAccess: boolean
  daysRemaining: number
  createdAt: string
}

export interface SubscriptionResponse {
  message: string
  company?: any
}

class SubscriptionService {
  private getAuthHeaders() {
    const token = localStorage.getItem('authToken')
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  }

  async getSubscriptionInfo(): Promise<SubscriptionInfo> {
    const response = await axios.get(
      `${API_BASE_URL}/api/subscription/info`,
      this.getAuthHeaders()
    )
    return response.data
  }

  async startTrial(trialDays: number = 7): Promise<SubscriptionResponse> {
    const response = await axios.post(
      `${API_BASE_URL}/api/subscription/trial`,
      { trialDays },
      this.getAuthHeaders()
    )
    return response.data
  }

  async activateSubscription(durationMonths: number = 1): Promise<SubscriptionResponse> {
    const response = await axios.post(
      `${API_BASE_URL}/api/subscription/activate`,
      { durationMonths },
      this.getAuthHeaders()
    )
    return response.data
  }

  async cancelSubscription(): Promise<SubscriptionResponse> {
    const response = await axios.post(
      `${API_BASE_URL}/api/subscription/cancel`,
      {},
      this.getAuthHeaders()
    )
    return response.data
  }

  // Helper method to check if user has access
  hasAccess(subscriptionInfo: SubscriptionInfo): boolean {
    return subscriptionInfo.hasAccess
  }

  // Helper method to get subscription status text
  getStatusText(subscriptionInfo: SubscriptionInfo): string {
    if (subscriptionInfo.subscriptionStatus === 'trial') {
      return `Trial (${subscriptionInfo.daysRemaining} dana preostalo)`
    } else if (subscriptionInfo.subscriptionStatus === 'active') {
      return `Aktivna (${subscriptionInfo.daysRemaining} dana preostalo)`
    } else if (subscriptionInfo.subscriptionStatus === 'expired') {
      return 'Istekla'
    } else if (subscriptionInfo.subscriptionStatus === 'cancelled') {
      return 'Otkazana'
    }
    return 'Nepoznato'
  }
}

export const subscriptionService = new SubscriptionService()