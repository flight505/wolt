'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CitationProps {
  id: string;
  source: string;
  url?: string;
  description?: string;
}

export default function Citation({ id, source, url, description }: CitationProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <span className="relative inline-block">
      <sup 
        className="text-wolt-blue dark:text-wolt-light cursor-pointer hover:underline" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Citation ${id}: ${source}`}
      >
        [{id}]
      </sup>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-0 mb-2 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10"
            style={{ minWidth: '250px', maxWidth: '300px' }}
          >
            <div className="text-sm text-gray-800 dark:text-gray-200">
              <p className="font-semibold mb-1">Source {id}:</p>
              {url ? (
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-wolt-blue dark:text-wolt-light hover:underline"
                >
                  {source}
                </a>
              ) : (
                <p>{source}</p>
              )}
              
              {description && (
                <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              )}
              
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-2 text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
} 