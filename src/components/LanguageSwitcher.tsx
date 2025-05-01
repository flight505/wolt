'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-switcher-container')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleLanguage = (lang: 'en' | 'da') => {
    setLanguage(lang);
    setIsOpen(false);
  };
  
  return (
    <div className="relative language-switcher-container">
      <button
        aria-label="Change language"
        className="flex items-center text-gray-800 dark:text-gray-200 hover:text-wolt-blue dark:hover:text-wolt-light transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1 font-medium">{language === 'en' ? '🇬🇧 EN' : '🇩🇰 DA'}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-20 w-32"
        >
          <div className="py-1">
            <button
              onClick={() => toggleLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === 'en' 
                  ? 'bg-gray-100 dark:bg-gray-700 text-wolt-blue dark:text-wolt-light font-medium' 
                  : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              🇬🇧 English
            </button>
            <button
              onClick={() => toggleLanguage('da')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                language === 'da' 
                  ? 'bg-gray-100 dark:bg-gray-700 text-wolt-blue dark:text-wolt-light font-medium' 
                  : 'text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              🇩🇰 Dansk
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
} 