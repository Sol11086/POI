import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './presets/**/*.{js,vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e6eaee',
          200: '#9aacbc',
          300: '#67829b',
          400: '#1b4469',
          500: '#022f58',
          600: '#01213e',
          700: '#01182c',
          800: '#010e1a',
          900: '#000912',
          950: '#000509',
        },
        celticBlue: '#2E70B8',
        independence: '#4B5563',
        zinc: '#F4F4F5',
        darkCharcoal: '#333333',
        jonquil: '#F1C40F',
        white: '#FFFFFF',
        black: '#000000',
        content: '#18181B',
        grayZinc: '#3F3F46',
        azureishWhite: '#E2E8F0',
        error: '#E34449',
        platinum: '#E1E3E8',
        charcoal: '#334155',
        cadetGray: '#94A3B8',
        lightSilver: '#D1D5DB',
        ufoGreen: '#2ECC71',
      },
      fontFamily: {
        sans: ['Roboto', 'Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
} satisfies Config;
