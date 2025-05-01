'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from './ThemeProvider';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  isScrolled: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isScrolled, onClose }: MobileMenuProps) {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  
  const menuBgClass = isScrolled 
    ? 'bg-white dark:bg-gray-800' 
    : 'bg-black/90 backdrop-blur-lg';
  
  const textClass = isScrolled 
    ? 'text-gray-800 dark:text-white' 
    : 'text-white';
  
  const buttonClass = isScrolled 
    ? 'bg-[--wolt-cyan] text-white' 
    : 'bg-white text-[--wolt-cyan]';
  
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className={`md:hidden overflow-hidden ${menuBgClass}`}
    >
      <div className="container mx-auto px-4 py-6 flex flex-col space-y-5">
        <div className="flex justify-end mb-2">
          <button 
            onClick={onClose}
            className={`${textClass} p-1`}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <Link 
          href="/" 
          className={`px-4 py-3 rounded-lg font-medium ${textClass} hover:bg-gray-100/10`}
          onClick={onClose}
        >
          {t('common.nav.home')}
        </Link>
        
        <Link 
          href="/about" 
          className={`px-4 py-3 rounded-lg font-medium ${textClass} hover:bg-gray-100/10`}
          onClick={onClose}
        >
          {t('common.nav.about')}
        </Link>
        
        <Link 
          href="/pricing" 
          className={`px-4 py-3 rounded-lg font-medium ${textClass} hover:bg-gray-100/10`}
          onClick={onClose}
        >
          {t('common.nav.pricing')}
        </Link>
        
        <Link 
          href="/workers" 
          className={`px-4 py-3 rounded-lg font-medium ${textClass} hover:bg-gray-100/10`}
          onClick={onClose}
        >
          {t('common.nav.workers')}
        </Link>
        
        <Link 
          href="/restaurants" 
          className={`px-4 py-3 rounded-lg font-medium ${textClass} hover:bg-gray-100/10`}
          onClick={onClose}
        >
          {t('common.nav.restaurants')}
        </Link>
        
        <Link 
          href="/alternatives" 
          className={`px-4 py-3 rounded-lg font-medium ${textClass} hover:bg-gray-100/10`}
          onClick={onClose}
        >
          {t('common.nav.alternatives')}
        </Link>
        
        <Link 
          href="/pledge" 
          className={`px-4 py-3 text-center rounded-lg font-medium ${buttonClass}`}
          onClick={onClose}
        >
          {t('common.nav.pledge')}
        </Link>
        
        <div className="border-t border-gray-200/20 dark:border-gray-700/20 pt-4 mt-2">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center">
              <button 
                onClick={toggleTheme}
                className={`${textClass} mr-4`}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    <span>Light Mode</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                    <span>Dark Mode</span>
                  </div>
                )}
              </button>
            </div>
            
            <LanguageSwitcher isScrolled={isScrolled} />
          </div>
        </div>
      </div>
    </motion.div>
  );
} 