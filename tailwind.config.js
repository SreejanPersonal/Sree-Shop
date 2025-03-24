/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
        'fade-in': 'fade-in 0.3s ease-out'
      },
      colors: {
        'light-bg': '#F8FAFC',
        'light-bg-secondary': '#F1F5F9',
        'light-bg-tertiary': '#E2E8F0',
        'light-text': '#334155',
        'light-text-secondary': '#64748B',
        'light-text-tertiary': '#94A3B8',
        'light-primary': {
          100: '#EEF2FF',
          200: '#E0E7FF',
          300: '#C7D2FE',
          400: '#A5B4FC',
          500: '#818CF8',
          600: '#6366F1',
          700: '#4F46E5',
        },
        'light-accent': {
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F9A8D4',
          400: '#F472B6',
          500: '#EC4899',
          600: '#DB2777',
          700: '#BE185D',
        },
        'dark-bg': '#0F172A',
        'dark-bg-secondary': '#1E293B',
        'dark-bg-tertiary': '#334155',
        'dark-text': '#F1F5F9',
        'dark-text-secondary': '#CBD5E1',
        'dark-text-tertiary': '#94A3B8',
        'dark-primary': {
          100: '#312E81',
          200: '#3730A3',
          300: '#4338CA',
          400: '#4F46E5',
          500: '#6366F1',
          600: '#818CF8',
          700: '#A5B4FC',
        },
        'dark-accent': {
          100: '#831843',
          200: '#9D174D',
          300: '#BE185D',
          400: '#DB2777',
          500: '#EC4899',
          600: '#F472B6',
          700: '#F9A8D4',
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'gradient-premium-shine': 'linear-gradient(45deg, transparent 45%, var(--tw-gradient-from) 50%, transparent 55%)',
        'gradient-premium-conic': 'conic-gradient(from 45deg, var(--tw-gradient-from), var(--tw-gradient-to), var(--tw-gradient-from))',
      },
      boxShadow: {
        'premium-sm': '0 2px 4px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
        'premium-md': '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'premium-lg': '0 10px 15px rgba(0, 0, 0, 0.05), 0 4px 6px rgba(0, 0, 0, 0.1)',
        'premium-xl': '0 15px 25px rgba(0, 0, 0, 0.05), 0 5px 10px rgba(0, 0, 0, 0.1)',
        'premium-2xl': '0 25px 50px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1)',
        'premium-inner': 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'premium': 'blur(20px)',
      },
      backgroundSize: {
        'premium': '400% 400%',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-45deg)' },
          '100%': { transform: 'translateX(200%) skewX(-45deg)' },
        },
        'slide-up-fade': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-fade': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'premium-gradient': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      animation: {
        'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up-fade': 'slide-up-fade 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down-fade': 'slide-down-fade 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-fade': 'scale-fade 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        'premium-gradient': 'premium-gradient 8s ease infinite',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'premium-in': 'cubic-bezier(0.4, 0, 1, 1)',
        'premium-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'premium-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      scale: {
        'premium': '1.05',
      },
    },
  },
  plugins: [],
}
