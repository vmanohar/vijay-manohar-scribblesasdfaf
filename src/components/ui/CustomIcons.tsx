
import React from 'react';

export const Strava: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7.04 13.828h4.172" />
    </svg>
  );
};

// Export custom favicon icon as a component for potential reuse
export const FaviconIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#004225"/>
      <path d="M11.208 20L14.672 10.64H17.008L20.472 20H18.328L15.52 12.096H16.128L13.32 20H11.208ZM12.616 17.248V15.52H19.064V17.248H12.616Z" fill="#FFFFFF" />
    </svg>
  );
};
