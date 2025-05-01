'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ImageContainer from './ImageContainer';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  linkText?: string;
  linkHref?: string;
  interactive?: boolean;
  imageHeight?: number;
  objectFit?: 'contain' | 'cover' | 'fill';
}

/**
 * InfoCard component that resembles Wolt merchant page cards with top images
 * Used for displaying product information or features with a clean, modern layout
 */
export default function InfoCard({
  title,
  description,
  imageSrc,
  imageAlt = '',
  className = '',
  linkText,
  linkHref,
  interactive = true,
  imageHeight = 200,
  objectFit = 'contain'
}: InfoCardProps) {
  // Animation variants for interactive cards
  const cardVariants = {
    initial: { 
      scale: 1,
      y: 0,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    },
    hover: { 
      scale: 1.02, 
      y: -6, 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
    },
    tap: { 
      scale: 0.98,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    }
  };
  
  // Base content of the card
  const content = (
    <motion.div 
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl border border-gray-200 dark:border-gray-700
        overflow-hidden h-full
        transition-all duration-300
        ${className}
      `}
      initial="initial"
      whileHover={interactive ? "hover" : undefined}
      whileTap={interactive ? "tap" : undefined}
      variants={interactive ? cardVariants : undefined}
    >
      {/* Image Area (Top) */}
      <div className="px-6 pt-6">
        <div className="rounded-lg overflow-hidden">
          <ImageContainer 
            src={imageSrc}
            alt={imageAlt || title}
            height={imageHeight}
            priority={false}
            className="w-full"
            objectFit={objectFit}
            animated={!interactive} // Only animate the image if the card itself isn't interactive
          />
        </div>
      </div>

      {/* Text Area (Bottom) */}
      <div className="p-6 pt-4 flex flex-col flex-grow">
        <h3 className="font-omnes font-bold text-xl mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-300 flex-grow">
          {description}
        </p>
        
        {/* Optional link */}
        {linkText && linkHref && (
          <div className="mt-4 pt-2">
            <motion.span 
              className="text-[--wolt-cyan] hover:text-[--wolt-cyan-light] font-medium inline-flex items-center group cursor-pointer"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {linkText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </motion.span>
          </div>
        )}
      </div>
    </motion.div>
  );
  
  // If card is interactive and has a link, wrap it in a Link component
  if (interactive && linkHref) {
    return (
      <Link href={linkHref} className="block h-full">
        {content}
      </Link>
    );
  }
  
  return content;
} 