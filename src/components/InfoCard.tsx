'use client';

import React from 'react';
import WoltCard from './WoltCard';
import ImageContainer from './ImageContainer';
import Link from 'next/link';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  linkText?: string;
  linkHref?: string;
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
  linkHref
}: InfoCardProps) {
  return (
    <WoltCard className={`flex flex-col h-full overflow-hidden ${className}`}> 
      {/* Image container with padding */}
      <div className="px-6 pt-6 mb-4">
        <ImageContainer 
          src={imageSrc}
          alt={imageAlt || title}
          height={180}
          priority
          className="mx-auto rounded-lg"
        />
      </div>

      {/* Text content with padding */}
      <div className="flex flex-col flex-grow p-6 pt-0">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base flex-grow">
          {description}
        </p>
        
        {/* Optional link */}
        {linkText && linkHref && (
          <div className="mt-4 pt-2">
            <Link 
              href={linkHref} 
              className="text-[--wolt-cyan] hover:text-[--wolt-cyan-light] font-medium inline-flex items-center"
            >
              {linkText}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </WoltCard>
  );
} 