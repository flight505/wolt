'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import WoltButton from './WoltButton';
import MobileMenu from './MobileMenu';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobileMenuOpen]);

  const headerBgClass = isScrolled
    ? 'bg-white/90 dark:bg-gray-800/90 shadow-md backdrop-blur-md'
    : 'bg-transparent';

  const logoColorClass = isScrolled
    ? 'text-[--wolt-cyan] dark:text-[--wolt-cyan-light]'
    : 'text-white';

  const linkColorClass = isScrolled
    ? 'text-gray-900 dark:text-gray-200 hover:text-[--wolt-cyan] dark:hover:text-[--wolt-cyan-light]'
    : 'text-white/80 hover:text-white';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${headerBgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left Section: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className={`text-2xl font-omnes font-bold transition-colors ${logoColorClass}`}>
              Cancel Wolt
            </Link>
          </div>

          {/* Center/Left Section: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 ml-8">
            <Link href="/" className={`font-medium transition-colors ${linkColorClass}`}>
              {t('common.nav.home')}
            </Link>
            <Link href="/about" className={`font-medium transition-colors ${linkColorClass}`}>
              {t('common.nav.about')}
            </Link>
            <Link href="/pricing" className={`font-medium transition-colors ${linkColorClass}`}>
              {t('common.nav.pricing')}
            </Link>
            <Link href="/workers" className={`font-medium transition-colors ${linkColorClass}`}>
              {t('common.nav.workers')}
            </Link>
            <Link href="/restaurants" className={`font-medium transition-colors ${linkColorClass}`}>
              {t('common.nav.restaurants')}
            </Link>
            <Link href="/alternatives" className={`font-medium transition-colors ${linkColorClass}`}>
              {t('common.nav.alternatives')}
            </Link>
          </nav>

          {/* Right Section: Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Pledge Button */}
            <div className="hidden md:block">
              <Link href="/pledge">
                <WoltButton 
                  variant="primary" 
                  size="small"
                >
                  {t('common.nav.pledge')}
                </WoltButton>
              </Link>
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`${linkColorClass} transition-colors p-2`}
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

            {/* Language Switcher */}
            <div className="flex items-center">
              <LanguageSwitcher isScrolled={isScrolled} />
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${linkColorClass} p-2`}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu 
            isScrolled={isScrolled}
            onClose={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
} 