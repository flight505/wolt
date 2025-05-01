import React from 'react';
import { replaceDeprecatedColorClasses } from '@/lib/WoltColors';

/**
 * Higher-order component that updates className props to use the new color system
 * This helps transition components from deprecated Tailwind color classes to CSS variables
 */
export function withColorSystem<P extends { className?: string }>(
  Component: React.ComponentType<P>
): React.FC<P> {
  const WithColorSystem = (props: P) => {
    const { className, ...otherProps } = props;
    
    const updatedClassName = className 
      ? replaceDeprecatedColorClasses(className)
      : '';
    
    return <Component className={updatedClassName} {...otherProps as P} />;
  };
  
  const componentName = Component.displayName || Component.name || 'Component';
  WithColorSystem.displayName = `withColorSystem(${componentName})`;
  
  return WithColorSystem;
}

/**
 * Helper function to update a className string with the new color system
 * Use this directly in component render functions when the component doesn't have a className prop
 * or when you need to compose multiple class strings
 */
export const updateColorClasses = (className: string): string => {
  return replaceDeprecatedColorClasses(className);
};

export default withColorSystem; 