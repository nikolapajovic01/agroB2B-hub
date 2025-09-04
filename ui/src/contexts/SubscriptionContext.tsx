import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { subscriptionService, SubscriptionInfo } from '../services/subscriptionService'

interface SubscriptionContextType {
  subscriptionInfo: SubscriptionInfo | null
  hasAccess: boolean
  isLoading: boolean
  error: string | null
  refreshSubscription: () => Promise<void>
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

interface SubscriptionProviderProps {
  children: ReactNode
}

export const SubscriptionProvider: React.FC<SubscriptionProviderProps> = ({ children }) => {
  const [subscriptionInfo, setSubscriptionInfo] = useState<SubscriptionInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const hasAccess = subscriptionInfo?.hasAccess ?? false

  const fetchSubscriptionInfo = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const info = await subscriptionService.getSubscriptionInfo()
      setSubscriptionInfo(info)
    } catch (err) {
      console.error('Error fetching subscription info:', err)
      setError('Greška pri učitavanju subscription informacija')
    } finally {
      setIsLoading(false)
    }
  }

  const refreshSubscription = async () => {
    await fetchSubscriptionInfo()
  }

  useEffect(() => {
    // Only fetch if user is logged in
    const token = localStorage.getItem('authToken')
    if (token) {
      fetchSubscriptionInfo()
    } else {
      setIsLoading(false)
    }

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'authToken') {
        if (e.newValue) {
          // User logged in
          fetchSubscriptionInfo()
        } else {
          // User logged out
          setSubscriptionInfo(null)
          setIsLoading(false)
        }
      }
    }

    // Listen for custom events (when user logs in/out in same tab)
    const handleAuthChange = () => {
      const currentToken = localStorage.getItem('authToken')
      if (currentToken) {
        fetchSubscriptionInfo()
      } else {
        setSubscriptionInfo(null)
        setIsLoading(false)
      }
    }

    // Refresh subscription when page becomes visible (user returns to tab)
    const handleVisibilityChange = () => {
      if (!document.hidden && localStorage.getItem('authToken')) {
        fetchSubscriptionInfo()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('authChange', handleAuthChange)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authChange', handleAuthChange)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const value: SubscriptionContextType = {
    subscriptionInfo,
    hasAccess,
    isLoading,
    error,
    refreshSubscription
  }

  return (
    <SubscriptionContext.Provider value={value}>
      {children}
    </SubscriptionContext.Provider>
  )
}

export const useSubscription = (): SubscriptionContextType => {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
}