import localFont from 'next/font/local'

export const FCIconic = localFont({
  src: [
    {
      path: './FCIconic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './FCIconic-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './FCIconic-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './FCIconic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-FCIconic',
})
