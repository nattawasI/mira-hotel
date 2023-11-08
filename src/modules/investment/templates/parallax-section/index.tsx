'use client'

/** libs */
import { useRef } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

/** components */
import ParallaxLabel from '@/modules/investment/components/parallax-label'
import ParallaxImage from '@/modules/investment/components/parallax-image'

const ParallaxSection = (): JSX.Element => {
  return (
    <ParallaxProvider>
      <div className="relative h-[35.9375rem] overflow-hidden pt-3 lg:h-[44.8125rem] lg:pt-[10rem]">
        <ParallaxImage />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,_rgba(214,207,200,0.00)_65.28%,_#D6CFC8_100%),_linear-gradient(180deg,_#D6CFC8_2.6%,_rgba(214,207,200,0.00)_45.83%)]" />
        <div className="relative z-20 flex flex-col items-center gap-y-3">
          <div>
            <ParallaxLabel icon="home">Designed for your comfort</ParallaxLabel>
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-[21rem]">
            <ParallaxLabel icon="airplane">Elevate your living experience</ParallaxLabel>
            <ParallaxLabel icon="phone">Smart living, seamlessly integrated</ParallaxLabel>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default ParallaxSection
