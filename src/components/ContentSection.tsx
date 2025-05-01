'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  bgColor?: 'light' | 'dark' | 'white';
  id?: string;
  className?: string;
}

export default function ContentSection({
  title,
  children,
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
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 