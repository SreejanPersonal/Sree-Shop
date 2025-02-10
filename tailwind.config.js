/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors remain unchanged
        'light-bg': {
          DEFAULT: '#ffffff',
          secondary: '#f8fafc',
          tertiary: '#f1f5f9'
        },
        'light-text': {
          DEFAULT: '#0f172a',
          secondary: '#334155',
          tertiary: '#64748b'
        },
        'light-primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        },
        'light-accent': {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81'
        },
        
        // Enhanced dark mode - Rich, premium, and modern palette
        'dark-bg': {
          DEFAULT: '#0B1121', // Deeper, richer navy blue
          secondary: '#131C33', // Slightly lighter navy
          tertiary: '#1C2842' // Accent background
        },
        'dark-text': {
          DEFAULT: '#EEF2FF', // Crisp, clear white with slight blue tint
          secondary: '#CBD5E1', // Softer white for secondary text
          tertiary: '#94A3B8' // Muted text for tertiary information
        },
        'dark-primary': {
          50: '#F5F7FF',
          100: '#EEF2FF',
          200: '#E0E7FF',
          300: '#C7D2FE',
          400: '#818CF8', // Vibrant indigo
          500: '#6366F1', // Primary action color
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81'
        },
        'dark-accent': {
          50: '#FDF4FF',
          100: '#FAE8FF',
          200: '#F5D0FE',
          300: '#E879F9', // Vibrant pink
          400: '#D946EF', // Bright accent
          500: '#C026D3',
          600: '#A21CAF',
          700: '#86198F',
          800: '#701A75',
          900: '#4A044E'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'premium-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.06)',
        'premium-md': '0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 8px -1px rgba(0, 0, 0, 0.06)',
        'premium-lg': '0 8px 24px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.06)',
        'premium-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'premium-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'premium-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      backdropBlur: {
        'premium': '12px',
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
    },
  },
  plugins: [],
};