import type { Config } from 'tailwindcss';

const config = {
   darkMode: ['class'],
   content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
   prefix: '',
   theme: {
      container: {
         padding: {
            DEFAULT: '16px',
            md: '22px',
            lg: '24px',
            '3xl': '32px',
            '4xl': '48px',
         },
         screens: {
            DEFAULT: '100%',
         },
      },
      extend: {
         keyframes: {
            'accordion-down': {
               from: { height: '0' },
               to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
               from: { height: 'var(--radix-accordion-content-height)' },
               to: { height: '0' },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
