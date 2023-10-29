const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    screens: {
      'max-sm': { max: '639px' }, // => @media (max-width: 639px) { ... }

      sm: '640px', // => @media (min-width: 640px) { ... }

      'max-md': { max: '767px' }, // => @media (max-width: 767px) { ... }

      md: '768px', // => @media (min-width: 768px) { ... }

      'max-lg': { max: '1023px' }, // => @media (max-width: 1023px) { ... }

      lg: '1024px', // => @media (min-width: 1024px) { ... }

      'max-xl': { max: '1199px' }, // => @media (max-width: 1199px) { ... }
      xl: '1200px', // => @media (min-width: 1200px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0F0F0F',
      white: '#FFFFFF',
      primary: '#686636',
      secondary: '#D6CFC8',
      yellow: '#CA9214',
    },
    spacing: {
      0: '0',
      px: '1px',
      0.25: '0.25rem', // 4px
      0.5: '0.5rem', // 8px
      0.75: '0.75rem', // 12px
      1: '1rem', // 16px
      1.25: '1.25rem', // 20px
      1.5: '1.5rem', // 24px
      1.75: '1.75rem', // 28px
      2: '2rem', // 32px
      2.25: '2.25rem', // 36px
      2.5: '2.5rem', // 40px
      2.75: '2.75rem', // 44px
      3: '3rem', // 48px
      3.75: '3.75rem', // 60px
      4: '4rem', // 64px
    },
    fontSize: {
      0.75: ['0.75rem', '1rem'],
      0.875: ['0.875rem', '1.25rem'],
      1: ['1rem', '1.36rem'],
      1.25: ['1.125rem', '1.69rem'],
      1.375: ['1.375rem', '1.88rem'],
      1.5: ['1.5rem', '2rem'],
      2.25: ['2.25rem', '3.75rem'],
      2.375: ['2.375rem', '3.19rem'],
      3.125: ['3.125rem', '3.75rem'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
    },
    extend: {
      fontFamily: {
        general: ['"General Sans"', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
}
