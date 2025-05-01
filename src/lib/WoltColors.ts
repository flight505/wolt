/**
 * Wolt color system utilities
 * Maps deprecated Tailwind color classes to CSS variable based classes
 */

// Background colors
export const bgWoltBlueClass = 'bg-[--wolt-cyan]';
export const bgWoltBlueDarkClass = 'bg-[--wolt-cyan-dark]';
export const bgWoltBlueLightClass = 'bg-[--wolt-cyan-light]';
export const bgWoltNavyClass = 'bg-[--wolt-navy]';
export const bgWoltNavyLightClass = 'bg-[--wolt-navy-light]';

// Text colors
export const textWoltBlueClass = 'text-[--wolt-cyan]';
export const textWoltBlueDarkClass = 'text-[--wolt-cyan-dark]';
export const textWoltBlueLightClass = 'text-[--wolt-cyan-light]';
export const textWoltNavyClass = 'text-[--wolt-navy]';
export const textWoltNavyLightClass = 'text-[--wolt-navy-light]';

// Border colors
export const borderWoltBlueClass = 'border-[--wolt-cyan]';
export const borderWoltBlueDarkClass = 'border-[--wolt-cyan-dark]';
export const borderWoltBlueLightClass = 'border-[--wolt-cyan-light]';

// Hover classes
export const hoverBgWoltBlueClass = 'hover:bg-[--wolt-cyan]';
export const hoverBgWoltBlueDarkClass = 'hover:bg-[--wolt-cyan-dark]';
export const hoverBgWoltBlueLightClass = 'hover:bg-[--wolt-cyan-light]';
export const hoverTextWoltBlueClass = 'hover:text-[--wolt-cyan]';
export const hoverTextWoltBlueDarkClass = 'hover:text-[--wolt-cyan-dark]';
export const hoverTextWoltBlueLightClass = 'hover:text-[--wolt-cyan-light]';

// Mapping from deprecated classes to new classes
export const colorClassMap = {
  // Background colors
  'bg-wolt-blue': bgWoltBlueClass,
  'bg-wolt-blue-dark': bgWoltBlueDarkClass,
  'bg-wolt-blue-light': bgWoltBlueLightClass,
  
  // Text colors
  'text-wolt-blue': textWoltBlueClass,
  'text-wolt-blue-dark': textWoltBlueDarkClass,
  'text-wolt-blue-light': textWoltBlueLightClass,
  'text-wolt-light': textWoltBlueLightClass, // Alias

  // Hover states
  'hover:bg-wolt-blue': hoverBgWoltBlueClass,
  'hover:bg-wolt-blue-dark': hoverBgWoltBlueDarkClass,
  'hover:bg-wolt-dark': 'hover:bg-[--wolt-navy]', // Dark hover instead of blue-dark
  'hover:text-wolt-blue': hoverTextWoltBlueClass,
  'hover:text-wolt-blue-dark': hoverTextWoltBlueDarkClass,
  'hover:text-wolt-light': hoverTextWoltBlueLightClass, // Alias
};

/**
 * Utility function to replace deprecated color classes with CSS variable based classes
 * @param className Original className string containing deprecated color classes
 * @returns Updated className string with CSS variable based classes
 */
export const replaceDeprecatedColorClasses = (className: string): string => {
  if (!className) return '';
  
  let updatedClassName = className;
  
  Object.entries(colorClassMap).forEach(([oldClass, newClass]) => {
    updatedClassName = updatedClassName.replace(new RegExp(`\\b${oldClass}\\b`, 'g'), newClass);
  });
  
  return updatedClassName;
}; 