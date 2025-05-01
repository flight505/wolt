import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deprecated - use CSS variables instead
        wolt: {
          blue: '#009DE0',
          'blue-dark': '#0072A3',
          'blue-light': '#33B1E6',
          'blue-lighter': '#E6F6FC',
        },
        // Use these RGBA values for opacity variants
        'wolt-cyan': {
          DEFAULT: 'rgba(var(--wolt-cyan-rgb), <alpha-value>)',
          dark: 'rgba(var(--wolt-cyan-dark-rgb), <alpha-value>)',
          light: 'rgba(var(--wolt-cyan-light-rgb), <alpha-value>)',
        },
        'wolt-navy': {
          DEFAULT: 'rgba(var(--wolt-navy-rgb), <alpha-value>)',
          light: 'rgba(var(--wolt-navy-light-rgb), <alpha-value>)',
        },
        error: {
          100: '#FEE2E2',
          200: '#FECACA',
          500: '#EF4444',
          700: '#B91C1C',
          900: '#7F1D1D',
        },
        success: {
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          700: '#047857',
          900: '#064E3B',
        },
      },
      fontFamily: {
        'omnes': ['Omnes', 'sans-serif'],
        'sans': ['Omnes', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'wolt': '0 4px 6px rgba(0, 0, 0, 0.05)',
        'wolt-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '96': '24rem',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config; 