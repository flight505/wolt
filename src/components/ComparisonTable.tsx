'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface ComparisonItem {
  id: string;
  label: string;
  wolt: string | number;
  justEat: string | number;
  direct: string | number;
  woltHighlight?: boolean;
  justEatHighlight?: boolean;
  directHighlight?: boolean;
  unit?: string;
}

interface ComparisonTableProps {
  title: string;
  description?: string;
  items: ComparisonItem[];
  colorScheme?: 'default' | 'fees' | 'workers';
}

export default function ComparisonTable({ 
  title, 
  description, 
  items,
  colorScheme = 'default' 
}: ComparisonTableProps) {
  const { language } = useLanguage();
  
  // Determine color scheme for highlighting
  const getHighlightColor = (scheme: string, isGood: boolean) => {
    if (scheme === 'fees') {
      return isGood ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
    } else if (scheme === 'workers') {
      return isGood ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
    }
    return isGood ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-200 dark:bg-gray-600';
  };
  
  return (
    <div className="w-full mx-auto my-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title && (
          <h3 className="text-xl md:text-2xl font-omnes font-bold mb-4 text-center text-gray-900 dark:text-white">
            {title}
          </h3>
        )}
        
        {description && (
          <p className="text-center mb-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        
        {/* Responsive wrapper with horizontal scroll */}
        <div className="overflow-x-auto rounded-lg shadow relative">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-left">
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">
                  {language === 'en' ? 'Feature' : 'Funktion'}
                </th>
                <th className="px-4 py-3 text-center font-semibold text-wolt-blue dark:text-wolt-light">
                  Wolt
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">
                  Just Eat
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 dark:text-gray-300">
                  {language === 'en' ? 'Direct Order' : 'Direkte Bestilling'}
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={index % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800'}
                >
                  <td className="px-4 py-3 text-left border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium">
                    {item.label}
                  </td>
                  <td className={`px-4 py-3 text-center border-b border-gray-200 dark:border-gray-700 ${item.woltHighlight === false ? getHighlightColor(colorScheme, true) : item.woltHighlight === true ? getHighlightColor(colorScheme, false) : ''}`}>
                    {typeof item.wolt === 'number' && item.unit 
                      ? `${item.wolt}${item.unit}`
                      : item.wolt}
                  </td>
                  <td className={`px-4 py-3 text-center border-b border-gray-200 dark:border-gray-700 ${item.justEatHighlight === true ? getHighlightColor(colorScheme, true) : item.justEatHighlight === false ? getHighlightColor(colorScheme, false) : ''}`}>
                    {typeof item.justEat === 'number' && item.unit 
                      ? `${item.justEat}${item.unit}`
                      : item.justEat}
                  </td>
                  <td className={`px-4 py-3 text-center border-b border-gray-200 dark:border-gray-700 ${item.directHighlight === true ? getHighlightColor(colorScheme, true) : item.directHighlight === false ? getHighlightColor(colorScheme, false) : ''}`}>
                    {typeof item.direct === 'number' && item.unit 
                      ? `${item.direct}${item.unit}`
                      : item.direct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Shadow indicator for scrollable content */}
          <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent opacity-0 transition-opacity duration-300 ease-in-out shadow-horizontal hidden md:block scroll-indicator"></div>
        </div>
      </motion.div>
    </div>
  );
} 