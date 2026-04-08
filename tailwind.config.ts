import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'Droid Sans', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
        hero: ['"Press Start 2P"', 'monospace'],
        display: ['"IBM Plex Sans"', 'Droid Sans', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'Droid Sans', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        // Brutalist palette - stark and harsh
        'neon-yellow': '#e4ff00',
        'brutal-yellow': '#e4ff00',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      letterSpacing: {
        tightest: '-0.05em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.025em',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        none: '0px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} satisfies Config;