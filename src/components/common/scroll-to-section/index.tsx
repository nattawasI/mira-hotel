'use client'

/** libs */
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ScrollToSection = (): JSX.Element => {
  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return <></>
}

export default ScrollToSection
