'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface WoltButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function WoltButton({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  className = '',
  ...props
}: WoltButtonProps) {
  // Base styles - using wolt design system
  const baseStyles = 'wolt-btn';
  
  // Size styles
  const sizeStyles = {
    small: 'text-sm py-2 px-3 min-h-[36px]',
    medium: 'text-base py-2.5 px-4 min-h-[44px]',
    large: 'text-lg py-3 px-6 min-h-[52px]'
  };
  
  // Variant styles - using wolt design system
  const variantStyles = {
    primary: 'wolt-btn-primary',
    secondary: 'wolt-btn-secondary',
    tertiary: 'bg-transparent text-[--wolt-cyan] hover:bg-[--wolt-gray-50]'
  };
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';
  
  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`;
  
  return (
    <motion.button
      className={buttonStyles}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
} 