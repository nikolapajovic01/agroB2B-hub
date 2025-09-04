import React, { useState } from 'react'
import { useSubscription } from '../contexts/SubscriptionContext'
import SubscriptionUpgradeModal from './SubscriptionUpgradeModal'

interface SubscriptionGuardProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  showUpgradeButton?: boolean
}

const SubscriptionGuard: React.FC<SubscriptionGuardProps> = ({
  children,
  fallback,
  showUpgradeButton = true
}) => {
  const { hasAccess, subscriptionInfo, isLoading } = useSubscription()
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (hasAccess) {
    return <>{children}</>
  }

  if (fallback) {
    return <>{fallback}</>
  }

  const defaultFallback = (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
      <div className="mb-4">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Premium sadržaj
      </h3>
      
      <p className="text-gray-600 mb-4">
        {subscriptionInfo?.subscriptionStatus === 'trial' 
          ? `Trial period je istekao. Upgrade-ujte za pristup ovom sadržaju.`
          : subscriptionInfo?.subscriptionStatus === 'expired'
          ? 'Vaš subscription je istekao. Molimo obnovite za pristup.'
          : 'Ova funkcionalnost zahteva aktivni subscription.'
        }
      </p>

      {showUpgradeButton && (
        <button
          onClick={() => setShowUpgradeModal(true)}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
        >
          Upgrade Subscription
        </button>
      )}
    </div>
  )

  return (
    <>
      {defaultFallback}
      <SubscriptionUpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
        onUpgrade={() => {
          // Refresh subscription info after upgrade
          window.location.reload()
        }}
      />
    </>
  )
}

export default SubscriptionGuard