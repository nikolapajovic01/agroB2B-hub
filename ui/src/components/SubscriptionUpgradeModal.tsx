import React, { useState } from 'react'
import { useSubscription } from '../contexts/SubscriptionContext'
import { subscriptionService } from '../services/subscriptionService'

interface SubscriptionUpgradeModalProps {
  isOpen: boolean
  onClose: () => void
  onUpgrade: () => void
}

const SubscriptionUpgradeModal: React.FC<SubscriptionUpgradeModalProps> = ({
  isOpen,
  onClose,
  onUpgrade
}) => {
  const { subscriptionInfo } = useSubscription()
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleUpgrade = async () => {
    setIsLoading(true)
    try {
      await subscriptionService.activateSubscription(1) // 1 month
      onUpgrade()
      onClose()
    } catch (error) {
      console.error('Error upgrading subscription:', error)
      alert('Greška pri ažuriranju subscription-a')
    } finally {
      setIsLoading(false)
    }
  }

  const handleExtendTrial = async () => {
    setIsLoading(true)
    try {
      await subscriptionService.startTrial(7) // 7 days
      onUpgrade()
      onClose()
    } catch (error) {
      console.error('Error extending trial:', error)
      alert('Greška pri produžavanju trial perioda')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Subscription Upgrade
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            Trenutno imate {subscriptionInfo?.subscriptionStatus === 'trial' ? 'trial' : 'ograničen'} pristup.
            Za potpun pristup svim funkcionalnostima, molimo upgrade-ujte svoj subscription.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-blue-900 mb-2">Premium funkcionalnosti:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Pristup svim grafikama i analitikama</li>
              <li>• Istorijski podaci za sve mesece i godine</li>
              <li>• Detaljne cene i tržišne informacije</li>
              <li>• Napredne filter opcije</li>
              <li>• Prioritetni support</li>
            </ul>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleUpgrade}
            disabled={isLoading}
            className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Učitavanje...' : 'Upgrade (€29/mesec)'}
          </button>
          
          {subscriptionInfo?.subscriptionStatus === 'expired' && (
            <button
              onClick={handleExtendTrial}
              disabled={isLoading}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Učitavanje...' : 'Produži Trial (7 dana)'}
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Možda kasnije
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionUpgradeModal