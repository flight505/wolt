'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageContainerProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill';
  animated?: boolean;
}

/**
 * A utility component for rendering images with consistent height and positioning
 * Includes animation options and proper Next.js Image optimization
 */
export default function ImageContainer({
  src,
  alt,
  height = 300,
  width,
  className = '',
  priority = false,
  objectFit = 'contain',
  animated = false
}: ImageContainerProps) {
  // Ensure the image path is prefixed correctly
  const imageFullPath = src.startsWith('/') ? src : `/images/${src}`;
  
  // Define different sizes for different viewport widths to help Next.js optimize
  const imageSizes = width 
    ? `${width}px` 
    : "(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw";
  
  // Set up animation variants if animation is enabled
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const Container = animated ? motion.div : 'div';
  
  return (
    <Container 
      className={`relative w-full overflow-hidden ${className}`} 
      style={{ 
        height: `${height}px`, 
        minHeight: `${height}px`, 
        position: 'relative' 
      }}
      initial={animated ? "hidden" : undefined}
      animate={animated ? "visible" : undefined}
      variants={animated ? imageVariants : undefined}
    >
      <Image 
        src={imageFullPath}
        alt={alt}
        fill
        className={`transition-all duration-300 ${objectFit === 'contain' ? 'object-contain' : 
          objectFit === 'cover' ? 'object-cover' : 'object-fill'}`}
        sizes={imageSizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        quality={80}
      />
    </Container>
  );
} 