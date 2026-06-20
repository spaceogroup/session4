import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Space-O brand accent (orange) + deep ink background
        brand: {
          DEFAULT: '#ff5a1f',
          50: '#fff3ee',
          100: '#ffe1d3',
          400: '#ff7a47',
          500: '#ff5a1f',
          600: '#e8430a',
        },
        ink: {
          900: '#0a0a0f',
          800: '#101019',
          700: '#181826',
          600: '#22222f',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
