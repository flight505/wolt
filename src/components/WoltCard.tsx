'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WoltCardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: boolean;
  onClick?: () => void;
  interactive?: boolean;
}

export default function WoltCard({
  children,
  className = '',
  accentColor = false,
  onClick,
  interactive = false
}: WoltCardProps) {
  // Base styles for the card
  const baseStyles = `
    bg-white dark:bg-gray-800 
    rounded-xl 
    shadow-sm 
    overflow-hidden 
    ${accentColor ? 'border-t-4 border-wolt-blue' : ''}
    ${interactive ? 'cursor-pointer transition-all duration-200' : ''}
    ${className}
  `;
  
  // Animation variants for interactive cards
  const variants = {
    initial: { scale: 1 },
    hover: { scale: 1.02, y: -4, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' },
    tap: { scale: 0.98 }
  };
  
  return interactive ? (
    <motion.div 
      className={baseStyles}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={variants}
    >
      {children}
    </motion.div>
  ) : (
    <div className={baseStyles}>
      {children}
    </div>
  );
} 