'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import ImageContainer from './ImageContainer';

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  imageUrl?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  bgColor?: 'light' | 'dark' | 'white';
  id?: string;
  className?: string;
}

export default function ContentSection({
  title,
  children,
  imageUrl,
  imageAlt = '',
  imagePosition = 'right',
  bgColor = 'light',
  id,
  className = '',
}: ContentSectionProps) {
  // Determine background color class based on bgColor prop
  const getBgColorClass = () => {
    switch (bgColor) {
      case 'white':
        return 'bg-white dark:bg-[--wolt-navy]';
      case 'light':
        return 'wolt-content-section-light';
      case 'dark':
        return 'wolt-content-section-dark';
      default:
        return 'wolt-content-section-light';
    }
  };
  
  const bgColorClass = getBgColorClass();
  
  return (
    <section id={id} className={`wolt-content-section ${bgColorClass} ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-[--wolt-gray-900] dark:text-white"
          >
            {title}
          </motion.h2>
        )}
        
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-start`}>
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === 'left' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`w-full ${imageUrl ? 'md:w-7/12' : 'md:w-full'}`}
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {children}
            </div>
          </motion.div>
          
          {imageUrl && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-5/12"
            >
              {imageUrl.startsWith('/') ? (
                <ImageContainer
                  src={imageUrl}
                  alt={imageAlt}
                  height={320}
                  className="rounded-lg shadow-md"
                  priority
                />
              ) : (
                <img 
                  src={imageUrl} 
                  alt={imageAlt}
                  className="w-full h-auto rounded-lg shadow-md" 
                />
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
} 