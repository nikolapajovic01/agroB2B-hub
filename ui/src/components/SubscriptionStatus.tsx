import React from 'react'
import { useSubscription } from '../contexts/SubscriptionContext'

interface SubscriptionStatusProps {
  className?: string
}

const SubscriptionStatus: React.FC<SubscriptionStatusProps> = ({ className = '' }) => {
  const { subscriptionInfo, isLoading, error } = useSubscription()

  if (isLoading) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
        <span className="text-sm text-gray-600">Učitavanje...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <span className="text-sm text-red-600">Greška</span>
      </div>
    )
  }

  if (!subscriptionInfo) {
    return null
  }

  const getStatusColor = () => {
    switch (subscriptionInfo.subscriptionStatus) {
      case 'trial':
        return 'bg-yellow-500'
      case 'active':
        return 'bg-green-500'
      case 'expired':
        return 'bg-red-500'
      case 'cancelled':
        return 'bg-gray-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getStatusText = () => {
    if (subscriptionInfo.subscriptionStatus === 'trial') {
      return `Trial (${subscriptionInfo.daysRemaining} dana)`
    } else if (subscriptionInfo.subscriptionStatus === 'active') {
      return `Aktivna (${subscriptionInfo.daysRemaining} dana)`
    } else if (subscriptionInfo.subscriptionStatus === 'expired') {
      return 'Istekla'
    } else if (subscriptionInfo.subscriptionStatus === 'cancelled') {
      return 'Otkazana'
    }
    return 'Nepoznato'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`w-3 h-3 ${getStatusColor()} rounded-full`}></div>
      <span className="text-sm text-gray-700">{getStatusText()}</span>
    </div>
  )
}

export default SubscriptionStatus