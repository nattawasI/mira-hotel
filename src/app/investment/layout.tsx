/** libs */
import type { Metadata } from 'next'

/** components */
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'
import ScrollToSection from '@/components/common/scroll-to-section'

/** styles */
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mira Hotel',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-base">
        <Header className="flex-shrink-0" />
        <div className="flex-1">{children}</div>
        <Footer />
        <ScrollToSection />
        <div id="modal-root" />
      </body>
    </html>
  )
}
