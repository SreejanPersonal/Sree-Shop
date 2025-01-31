/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        'light-bg': '#ffffff',
        'light-text': '#1a1a1a',
        'light-primary': '#3b82f6',
        'light-secondary': '#6366f1',
        'light-accent': '#f0f9ff',
        
        // Dark mode colors
        'dark-bg': '#0f172a',
        'dark-text': '#f8fafc',
        'dark-primary': '#3b82f6',
        'dark-secondary': '#818cf8',
        'dark-accent': '#1e293b',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};