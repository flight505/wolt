'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CircleIcon from './CircleIcon';
import { useInView } from 'framer-motion';

interface StatDisplayProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  animate?: boolean;
  className?: string;
}

export default function StatDisplay({
  value,
  label,
  icon,
  animate = true,
  className = ''
}: StatDisplayProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2
      }
    }
  };
  
  return (
    <div className={`flex flex-col items-center text-center ${className}`} ref={ref}>
      {icon && <CircleIcon icon={icon} animate={animate} className="mb-4" />}
      
      {animate ? (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={textVariants}
          className="flex flex-col items-center"
        >
          <span className="font-omnes font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
            {value}
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-lg">
            {label}
          </span>
        </motion.div>
      ) : (
        <div className="flex flex-col items-center">
          <span className="font-omnes font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
            {value}
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-lg">
            {label}
          </span>
        </div>
      )}
    </div>
  );
} 