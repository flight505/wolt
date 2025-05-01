'use client';

import React from 'react';
import FeatureCard from './FeatureCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface FeatureData {
  id: string;
  imageSrc: string;
  bgColor?: 'dark-blue' | 'dark-purple' | 'black';
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

interface FeatureCardGridProps {
  features: FeatureData[];
  className?: string;
}

export default function FeatureCardGrid({
  features,
  className = ''
}: FeatureCardGridProps) {
  const { language } = useLanguage();
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          imageSrc={feature.imageSrc}
          bgColor={feature.bgColor}
          title={feature.translations[language].title}
          description={feature.translations[language].description}
          linkText={feature.translations[language].linkText}
          linkHref={feature.linkHref}
        />
      ))}
    </div>
  );
} 