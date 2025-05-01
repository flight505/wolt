'use client';

import React from 'react';
import Link from 'next/link';
import WoltCard from './WoltCard';
import { useLanguage } from '@/contexts/LanguageContext';
import ImageContainer from './ImageContainer';

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor?: 'dark-blue' | 'dark-purple' | 'black';
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export default function FeatureCard({
  title,
  description,
  imageSrc,
  bgColor = 'dark-blue',
  linkText,
  linkHref,
  className = ''
}: FeatureCardProps) {
  const { language } = useLanguage();

  // Background color mappings
  const bgColorMap = {
    'dark-blue': 'bg-[#001E2D]',
    'dark-purple': 'bg-[#1B0A2A]',
    'black': 'bg-black'
  };

  return (
    <WoltCard
      className={`${bgColorMap[bgColor]} text-white p-6 flex flex-col h-full ${className}`}
      hover
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <ImageContainer 
            src={imageSrc}
            alt={title}
            height={240}
            priority
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-4 text-white/80 flex-grow">{description}</p>
        
        {linkText && linkHref && (
          <Link href={linkHref} className="text-[--wolt-cyan] hover:text-[--wolt-cyan-light] font-medium mt-auto inline-block">
            {linkText} →
          </Link>
        )}
      </div>
    </WoltCard>
  );
} 