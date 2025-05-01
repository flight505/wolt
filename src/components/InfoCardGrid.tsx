'use client';

import React from 'react';
import { motion } from 'framer-motion';
import InfoCard from './InfoCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface InfoCardData {
  id: string;
  imageSrc: string;
  linkHref?: string;
  imageHeight?: number;
  objectFit?: 'contain' | 'cover' | 'fill';
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
  gap?: 'sm' | 'md' | 'lg';
  staggerDelay?: number;
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
  columns = 3,
  gap = 'md',
  staggerDelay = 0.1
}: InfoCardGridProps) {
  const { language } = useLanguage();
  
  // Determine grid columns based on props
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };
  
  // Determine grid gap
  const gridGap = {
    sm: 'gap-4 md:gap-6',
    md: 'gap-6 md:gap-8',
    lg: 'gap-8 md:gap-10'
  };

  // Animation variants for staggered card reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5
      }
    }
  };

  return (
    <div className={className}>
      {/* Optional title and subtitle */}
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="text-3xl md:text-4xl font-bold mb-5 text-gray-900 dark:text-white font-omnes"
            >
              {title}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      )}
      
      {/* Cards grid */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={`grid grid-cols-1 ${gridCols[columns]} ${gridGap[gap]}`}
      >
        {cards.map((card) => (
          <motion.div key={card.id} variants={itemVariants} className="h-full">
            <InfoCard
              imageSrc={card.imageSrc}
              title={card.translations[language].title}
              description={card.translations[language].description}
              linkText={card.translations[language].linkText}
              linkHref={card.linkHref}
              imageHeight={card.imageHeight}
              objectFit={card.objectFit}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 