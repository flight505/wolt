'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'da';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Record<string, Record<string, Record<string, string>>>;
  t: (key: string) => string;
}

// Create the language context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  translations: {},
  t: (key: string) => key,
});

// Common translations for all components
const translations: Record<string, Record<string, Record<string, string>>> = {
  common: {
    nav: {
      home: {
        en: 'Home',
        da: 'Hjem',
      },
      about: {
        en: 'About',
        da: 'Om Os',
      },
      pricing: {
        en: 'Pricing',
        da: 'Priser',
      },
      workers: {
        en: 'Workers',
        da: 'Arbejdere',
      },
      restaurants: {
        en: 'Restaurants',
        da: 'Restauranter',
      },
      alternatives: {
        en: 'Alternatives',
        da: 'Alternativer',
      },
      'success-stories': {
        en: 'Success Stories',
        da: 'Succeshistorier',
      },
      pledge: {
        en: 'Pledge',
        da: 'Løftet',
      },
      contact: {
        en: 'Contact',
        da: 'Kontakt',
      },
    },
    
    button: {
      'sign-pledge': {
        en: 'Sign the Pledge',
        da: 'Skriv under på løftet',
      },
      'find-alternatives': {
        en: 'Find Alternatives',
        da: 'Find alternativer',
      },
      'learn-more': {
        en: 'Learn More',
        da: 'Læs mere',
      },
      'contact-us': {
        en: 'Contact Us',
        da: 'Kontakt os',
      },
    },

    footer: {
      rights: {
        en: 'All Rights Reserved',
        da: 'Alle rettigheder forbeholdes',
      },
      privacy: {
        en: 'Privacy Policy',
        da: 'Privatlivspolitik',
      },
    },
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get the saved language from localStorage, default to 'en'
  const [language, setLanguageState] = useState<Language>('en');
  
  // Load saved language preference from localStorage on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'da')) {
      setLanguageState(savedLanguage);
    }
  }, []);
  
  // Function to set language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };
  
  // Translation helper function
  const t = (key: string): string => {
    const keys = key.split('.');
    let current: any = translations;
    
    // Navigate through the translation object
    for (const k of keys) {
      if (current[k] === undefined) {
        return key; // Return the key if translation not found
      }
      current = current[k];
    }
    
    // Return the translation in the current language, or fall back to English
    return current[language] || current['en'] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext); 