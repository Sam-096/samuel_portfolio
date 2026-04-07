import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'Droid Sans', 'system-ui', 'sans-serif'],
        display: ['IBM Plex Sans', 'Droid Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        // Blacksmith color scheme
        'bs-black': '#000000',
        'bs-dark': '#202020',
        'bs-white': '#FFFFFF',
        'bs-gray': '#333333',
        'bs-yellow': '#F0FB29',  // Primary accent
        'bs-blue': '#AEE3FD',    // Soft blue
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0em',
        wide: '0.025em',
      },
      animation: {
        'typewriter': 'typewriter 3.5s steps(40, end) 1s forwards',
        'blink': 'blink 0.7s infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 49%': { borderColor: '#F0FB29', opacity: '1' },
          '50%, 100%': { borderColor: 'transparent', opacity: '0.2' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'dotted-pattern': `radial-gradient(circle, rgba(240, 251, 41, 0.1) 1px, transparent 1px)`,
        'dotted-dense': `radial-gradient(circle, rgba(240, 251, 41, 0.15) 2px, transparent 2px)`,
      },
      backgroundSize: {
        'dot-20': '20px 20px',
        'dot-40': '40px 40px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;