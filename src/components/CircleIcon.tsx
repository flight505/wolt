'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CircleIconProps {
  size?: 'small' | 'medium' | 'large';
  icon: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function CircleIcon({
  size = 'medium',
  icon,
  className = '',
  animate = true
}: CircleIconProps) {
  // Size mapping
  const sizeMap = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-24 h-24'
  };
  
  // Icon size mapping
  const iconSizeMap = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };
  
  // Base styles for circle - using CSS variable based color
  const circleStyles = `${sizeMap[size]} rounded-full bg-[--wolt-cyan] flex items-center justify-center text-white ${className}`;
  
  // Animation variants
  const variants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };
  
  return animate ? (
    <motion.div 
      className={circleStyles}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      variants={variants}
    >
      <div className={iconSizeMap[size]}>
        {icon}
      </div>
    </motion.div>
  ) : (
    <div className={circleStyles}>
      <div className={iconSizeMap[size]}>
        {icon}
      </div>
    </div>
  );
} 