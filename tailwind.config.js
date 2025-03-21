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
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'border-shine': 'border-shine 4s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'border-glow': {
          '0%, 100%': {
            'border-color': 'rgba(147, 51, 234, 0.5)', /* Purple glow */
          },
          '50%': {
            'border-color': 'rgba(59, 130, 246, 0.5)', /* Blue glow */
          }
        },
        'border-shine': {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
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
        sparkle: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 }
        },
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(45deg, #2C5EBD, #7B4397, #2C5EBD)',
        'gradient-shine': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      },
      backdropBlur: {
        'premium': '12px',
      },
      boxShadow: {
        'premium-sm': '0 2px 8px -1px rgba(147, 51, 234, 0.1), 0 2px 4px -2px rgba(59, 130, 246, 0.1)',
        'premium-lg': '0 4px 12px -2px rgba(147, 51, 234, 0.15), 0 4px 8px -2px rgba(59, 130, 246, 0.1)',
        'premium-xl': '0 8px 16px -4px rgba(147, 51, 234, 0.2), 0 6px 12px -3px rgba(59, 130, 246, 0.15)',
        'premium-glow': '0 0 15px rgba(147, 51, 234, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)',
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
