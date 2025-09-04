import React from 'react';
import { useSubscription } from '../../contexts/SubscriptionContext';

interface SubscriptionGateProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  feature?: string;
}

const SubscriptionGate: React.FC<SubscriptionGateProps> = ({ 
  children, 
  fallback,
  feature = "ova funkcionalnost"
}) => {
  const { hasAccess, subscriptionInfo, isLoading } = useSubscription();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!hasAccess) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 text-center">
        <div className="mb-4">
          <svg 
            className="mx-auto h-16 w-16 text-primary/60" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
            />
          </svg>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Premium Funkcionalnost
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {feature} je dostupna samo za korisnike sa aktivnom pretplatom.
        </p>

        {subscriptionInfo?.subscriptionStatus === 'trial' && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Trial period:</strong> {subscriptionInfo.daysRemaining} dana preostalo
            </p>
          </div>
        )}

        <div className="space-y-3">
          <button 
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            onClick={() => {
              // Navigate to subscription page
              window.location.href = '/subscription';
            }}
          >
            Aktiviraj Pretplatu
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ili <button 
              className="text-primary hover:underline"
              onClick={() => {
                // Navigate to trial extension
                window.location.href = '/subscription/trial';
              }}
            >
              produži trial period
            </button>
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default SubscriptionGate;
