/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#2E3192',
      black: '#2C2C32',
      'gray-50': '#7E838D',
      'gray-25': '#ADADBD',
      'gray-15': '#CECEDD',
      lightblue: '#6E87C4',
      'lightblue-10': '#E2E8F6',
      white: '#ffffff',
      highlight1: '#FF5C00',
      'highlight1-50': '#FC9F6B',
      'highlight1-10': '#F6EBE5',
      highlight2: '#8FE4FF',
      green: '#44A789',
      red: '#E03434',
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
      0.75: ['0.75rem', '1.125rem'],
      0.875: ['0.875rem', '1.625rem'],
      1: ['1rem', '1.75rem'],
      1.125: ['1.125rem', '2.125rem'],
      1.25: ['1.25rem', '2.375rem'],
      1.375: ['1.375rem', '2.375rem'],
      1.625: ['1.625rem', '2.625rem'],
      1.75: ['1.75rem', '2.625rem'],
      2.5: ['2.5rem', '3.625rem'],
      3: ['3rem', '4rem'],
    },
    fontWeight: {
      300: '300',
      500: '500',
    },
    extend: {
      fontFamily: {
        iconic: ['var(--font-FCIconic)', 'sans-serif'],
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
