/** libs */
import type { Metadata } from 'next'

/** components */
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'

/** styles */
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mira Hotel',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  )
}
