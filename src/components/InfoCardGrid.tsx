'use client';

import React from 'react';
import InfoCard from './InfoCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface InfoCardData {
  id: string;
  imageSrc: string;
  linkHref?: string;
  translations: {
    en: {
      title: string;
      description: string;
      linkText?: string;
    };
    da: {
      title: string;
      description: string;
      linkText?: string;
    };
  };
}

interface InfoCardGridProps {
  cards: InfoCardData[];
  title?: string;
  subtitle?: string;
  className?: string;
  columns?: 2 | 3 | 4;
}

/**
 * Grid layout for displaying InfoCards in a responsive grid
 * Ideal for feature sections, product showcases, or benefits listings
 */
export default function InfoCardGrid({
  cards,
  title,
  subtitle,
  className = '',
  columns = 3
}: InfoCardGridProps) {
  const { language } = useLanguage();
  
  // Determine grid columns based on props
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={className}>
      {/* Optional title and subtitle */}
      {(title || subtitle) && (
        <div className="text-center mb-10">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      {/* Cards grid */}
      <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
        {cards.map((card) => (
          <InfoCard
            key={card.id}
            imageSrc={card.imageSrc}
            title={card.translations[language].title}
            description={card.translations[language].description}
            linkText={card.translations[language].linkText}
            linkHref={card.linkHref}
          />
        ))}
      </div>
    </div>
  );
} 