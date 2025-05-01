'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export default function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
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
  
  const dropdownBgClass = isScrolled
    ? 'bg-white dark:bg-gray-800'
    : 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md';
  
  return (
    <div className="relative language-switcher-container">
      <button
        aria-label="Change language"
        className="flex items-center font-medium p-2 rounded-full hover:bg-gray-100/10 dark:hover:bg-gray-700/20 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center">
          {language === 'en' ? '🇬🇧' : '🇩🇰'}
          <span className="ml-1.5">{language === 'en' ? 'EN' : 'DA'}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className={`absolute top-full right-0 mt-2 w-36 rounded-md shadow-lg z-20 overflow-hidden ${dropdownBgClass}`}
          >
            <div className="py-1">
              <button
                onClick={() => toggleLanguage('en')}
                className={`flex items-center w-full px-4 py-2 text-sm text-left transition-colors
                  ${language === 'en' 
                    ? 'bg-[--wolt-cyan]/10 text-[--wolt-cyan] font-medium' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <span className="mr-2 text-base">🇬🇧</span>
                <span>English</span>
              </button>
              <button
                onClick={() => toggleLanguage('da')}
                className={`flex items-center w-full px-4 py-2 text-sm text-left transition-colors
                  ${language === 'da' 
                    ? 'bg-[--wolt-cyan]/10 text-[--wolt-cyan] font-medium' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <span className="mr-2 text-base">🇩🇰</span>
                <span>Dansk</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 