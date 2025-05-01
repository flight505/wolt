'use client';

import React from 'react';
import Image from 'next/image';

interface ImageContainerProps {
  src: string;
  alt: string;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * A utility component for rendering images with consistent height and positioning
 * This fixes the "Image with fill and height 0" warnings from Next.js
 */
export default function ImageContainer({
  src,
  alt,
  height = 300,
  className = '',
  priority = false
}: ImageContainerProps) {
  // Ensure the image path is prefixed correctly
  const imageFullPath = src.startsWith('/') ? src : `/images/${src}`;
  
  return (
    <div 
      className={`relative w-full ${className}`} 
      style={{ 
        height: `${height}px`, 
        minHeight: `${height}px`, 
        position: 'relative' 
      }}
    >
      <Image 
        src={imageFullPath}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
} 