import React from 'react';

/**
 * Loading Spinner Component
 * Reusable loading indicator
 */
const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={`inline-block ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className="animate-spin rounded-full border-4 border-gray-200 border-t-[#8B1A5C]"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;




