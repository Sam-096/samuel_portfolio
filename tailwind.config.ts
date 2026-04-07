import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // Dark refined palette
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
        },
        // Primary accents
        purple: {
          500: '#7c5cff',
          600: '#6a4de8',
          400: '#9975ff',
        },
        cyan: {
          500: '#00d9ff',
          400: '#33e5ff',
        },
        orange: {
          500: '#ff6b35',
          600: '#e85a27',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out',
        'typewriter': 'typewriter 2s steps(40, end)',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
      },
      transitionDelay: {
        '0': '0ms',
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
      },
      screens: {
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;