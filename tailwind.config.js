/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#ffffff',
        'light-bg-secondary': '#f8fafc',
        'light-bg-tertiary': '#f1f5f9',
        'light-text': '#1e293b',
        'light-text-secondary': '#475569',
        'light-text-tertiary': '#64748b',
        'light-primary': {
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
        },
        'light-accent': {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        'dark-bg': '#0f172a',
        'dark-bg-secondary': '#1e293b',
        'dark-bg-tertiary': '#334155',
        'dark-text': '#f8fafc',
        'dark-text-secondary': '#e2e8f0',
        'dark-text-tertiary': '#cbd5e1',
        'dark-primary': {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#374151',
          800: '#1f2937',
        },
        'dark-accent': {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'blob': 'blob 15s infinite',
        'fadeIn': 'fadeIn 1s ease-out forwards',
        'slideUp': 'slideUpFade 0.6s ease-out forwards',
        'float': 'softFloat 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30%, -30%) scale(1.1)' },
          '66%': { transform: 'translate(-20%, 20%) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        fadeIn: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))',
      },
      backdropBlur: {
        'premium': '12px',
      },
      boxShadow: {
        'premium-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'premium-lg': '0 4px 12px -2px rgba(0, 0, 0, 0.12), 0 4px 8px -2px rgba(0, 0, 0, 0.1)',
        'premium-xl': '0 8px 16px -4px rgba(0, 0, 0, 0.15), 0 6px 12px -3px rgba(0, 0, 0, 0.1)',
      },
      transitionProperty: {
        'all': 'all',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
      },
    },
  },
  plugins: [],
}
