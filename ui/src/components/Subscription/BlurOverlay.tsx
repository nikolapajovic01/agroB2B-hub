import React from 'react';
import { useSubscription } from '../../contexts/SubscriptionContext';

interface BlurOverlayProps {
  children: React.ReactNode;
  feature?: string;
  showOverlay?: boolean;
  className?: string;
}

const BlurOverlay: React.FC<BlurOverlayProps> = ({ 
  children, 
  feature = "ova funkcionalnost",
  showOverlay = true,
  className = ""
}) => {
  const { hasAccess, subscriptionInfo } = useSubscription();

  return (
    <div className={`relative ${className}`}>
      {/* Sadržaj - blurovan za trial korisnike */}
      <div className={!hasAccess ? 'blur-sm' : ''}>
        {children}
      </div>
      
      {/* Premium overlay */}
      {!hasAccess && showOverlay && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-primary/20">
            <svg className="w-8 h-8 text-primary mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-gray-600 dark:text-gray-300 font-medium text-center">Premium</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlurOverlay;


