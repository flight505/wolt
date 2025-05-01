'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // When scrolled more than 10px, change header style
      setIsScrolled(window.scrollY > 10);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call handler initially to set the correct state
    handleScroll();
    
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Dynamic header classes based on scroll position
  const headerClasses = `
    w-full 
    fixed 
    top-0 
    z-50 
    py-4
    transition-all 
    duration-300 
    ease-in-out
    ${isScrolled 
      ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-md' 
      : 'bg-transparent dark:bg-transparent shadow-none'}
  `;
  
  // Dynamic text color classes based on scroll position
  const textColorClass = isScrolled 
    ? 'text-gray-900 dark:text-white' 
    : 'text-white';
  
  const linkColorClass = isScrolled
    ? 'text-gray-700 dark:text-gray-200 hover:text-wolt-blue dark:hover:text-wolt-light'
    : 'text-white/80 hover:text-white';
  
  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-wolt-blue dark:text-wolt-light' : 'text-white'}`}>
            Cancel Wolt
          </Link>
        </motion.div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`transition ${linkColorClass}`}>
            {t('common.nav.home')}
          </Link>
          <Link href="/about" className={`transition ${linkColorClass}`}>
            {t('common.nav.about')}
          </Link>
          <Link href="/pricing" className={`transition ${linkColorClass}`}>
            {t('common.nav.pricing')}
          </Link>
          <Link href="/workers" className={`transition ${linkColorClass}`}>
            {t('common.nav.workers')}
          </Link>
          <Link href="/alternatives" className={`transition ${linkColorClass}`}>
            {t('common.nav.alternatives')}
          </Link>
          <Link href="/pledge" className={`transition ${linkColorClass}`}>
            {t('common.nav.pledge')}
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className={`${linkColorClass} transition`}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <span className={`${isScrolled ? 'text-gray-400' : 'text-white/40'}`}>|</span>
          <LanguageSwitcher />
          <button className={`md:hidden ${linkColorClass}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
} 