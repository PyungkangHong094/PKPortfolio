import React from 'react';

interface ProjectToggleProps {
  activeType: 'web' | 'app';
  onToggle: (type: 'web' | 'app') => void;
}

export function ProjectToggle({ activeType, onToggle }: ProjectToggleProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full inline-flex">
        <button
          onClick={() => onToggle('web')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeType === 'web'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          Web Projects
        </button>
        <button
          onClick={() => onToggle('app')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeType === 'app'
              ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          App Projects
        </button>
      </div>
    </div>
  );
}