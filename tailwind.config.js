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
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#0F0F0F',
      primary: '#686636',
      secondary: '#D6CFC8',
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
    },
    fontSize: {
      1: ['1rem', '1.375rem'],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
    },
    extend: {
      fontFamily: {
        general: ['"General Sans"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
