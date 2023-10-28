/** libs */
import type { Metadata } from 'next'

/** styles */
import '@/styles/globals.css'

/** fonts */
import { FCIconic } from '@/fonts'

export const metadata: Metadata = {
  title: 'Thailand Exhibition',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={FCIconic.className}>
      <body>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  )
}
