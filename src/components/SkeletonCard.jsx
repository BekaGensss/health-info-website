// src/components/SkeletonCard.jsx
import React from 'react';

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden animate-pulse transition-colors duration-300">
    <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
    <div className="p-6">
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
    </div>
  </div>
);

export default SkeletonCard;