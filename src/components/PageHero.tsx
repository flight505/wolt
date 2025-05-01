'use client';

import { motion } from 'framer-motion';
import ImageContainer from './ImageContainer';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  color?: 'primary' | 'secondary' | 'danger';
}

export default function PageHero({ title, subtitle, imageUrl, color = 'primary' }: PageHeroProps) {
  // Determine background color based on the color prop
  const bgColorClass = 
    color === 'primary' ? 'bg-[--wolt-cyan]' : 
    color === 'secondary' ? 'bg-[--wolt-navy]' : 
    'bg-[--wolt-error]';
  
  return (
    <section className={`wolt-hero ${bgColorClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl md:text-2xl text-white/90"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          
          {imageUrl && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="w-full max-w-md">
                <ImageContainer
                  src={imageUrl}
                  alt={title}
                  height={300}
                  priority
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
} 