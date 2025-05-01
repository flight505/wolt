'use client';

import React from 'react';

interface ColorSwatchProps {
  name: string;
  variable: string;
  hexValue: string;
  textColor?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, variable, hexValue, textColor = 'text-white' }) => {
  return (
    <div className="flex flex-col mb-4">
      <div 
        className={`h-24 rounded-lg mb-2 flex items-end p-3 ${textColor}`} 
        style={{ backgroundColor: `var(${variable})` }}
      >
        <div className="text-sm font-medium backdrop-blur-sm bg-black/10 p-1 rounded">
          {name}
        </div>
      </div>
      <div className="text-sm">
        <div className="font-bold">{variable}</div>
        <div className="text-gray-600 dark:text-gray-400">{hexValue}</div>
      </div>
    </div>
  );
};

export default function ColorStyleGuide() {
  const colors = [
    { name: 'Cyan (Primary)', variable: '--wolt-cyan', hexValue: '#009DE0', textColor: 'text-white' },
    { name: 'Cyan Dark', variable: '--wolt-cyan-dark', hexValue: '#0087C1', textColor: 'text-white' },
    { name: 'Cyan Light', variable: '--wolt-cyan-light', hexValue: '#54BCEA', textColor: 'text-white' },
    { name: 'Navy', variable: '--wolt-navy', hexValue: '#002A3A', textColor: 'text-white' },
    { name: 'Navy Light', variable: '--wolt-navy-light', hexValue: '#003E55', textColor: 'text-white' },
    { name: 'Dark', variable: '--wolt-dark', hexValue: '#1A1A1A', textColor: 'text-white' },
    { name: 'Gray 900', variable: '--wolt-gray-900', hexValue: '#1F1F1F', textColor: 'text-white' },
    { name: 'Gray 800', variable: '--wolt-gray-800', hexValue: '#333333', textColor: 'text-white' },
    { name: 'Gray 700', variable: '--wolt-gray-700', hexValue: '#4D4D4D', textColor: 'text-white' },
    { name: 'Gray 600', variable: '--wolt-gray-600', hexValue: '#666666', textColor: 'text-white' },
    { name: 'Gray 500', variable: '--wolt-gray-500', hexValue: '#808080', textColor: 'text-white' },
    { name: 'Gray 400', variable: '--wolt-gray-400', hexValue: '#999999', textColor: 'text-gray-900' },
    { name: 'Gray 300', variable: '--wolt-gray-300', hexValue: '#B3B3B3', textColor: 'text-gray-900' },
    { name: 'Gray 200', variable: '--wolt-gray-200', hexValue: '#CCCCCC', textColor: 'text-gray-900' },
    { name: 'Gray 100', variable: '--wolt-gray-100', hexValue: '#E6E6E6', textColor: 'text-gray-900' },
    { name: 'Gray 50', variable: '--wolt-gray-50', hexValue: '#F3F3F3', textColor: 'text-gray-900' },
    { name: 'White', variable: '--wolt-white', hexValue: '#FFFFFF', textColor: 'text-gray-900' },
    { name: 'Success', variable: '--wolt-success', hexValue: '#00C26C', textColor: 'text-white' },
    { name: 'Error', variable: '--wolt-error', hexValue: '#FF3B30', textColor: 'text-white' },
    { name: 'Warning', variable: '--wolt-warning', hexValue: '#FFCC00', textColor: 'text-gray-900' },
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Wolt Color System</h2>
      
      <h3 className="text-xl font-semibold mb-4">How to Use</h3>
      <div className="mb-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="mb-2"><strong>In CSS:</strong> <code>color: var(--wolt-cyan);</code></p>
        <p className="mb-2"><strong>In Tailwind:</strong> <code>text-[--wolt-cyan]</code> or <code>bg-[--wolt-cyan]</code></p>
        <p><strong>With opacity:</strong> <code>bg-wolt-cyan/50</code> (uses RGB variables)</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {colors.map((color) => (
          <ColorSwatch 
            key={color.variable}
            name={color.name}
            variable={color.variable}
            hexValue={color.hexValue}
            textColor={color.textColor}
          />
        ))}
      </div>
    </div>
  );
} 