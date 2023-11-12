'use client'

/** libs */
import { ReactNode } from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'

type ParallaxBackgroundProps = {
  children?: ReactNode
}

const ParallaxBackground = ({ children }: ParallaxBackgroundProps): JSX.Element => {
  return (
    <ParallaxProvider>
      <ParallaxBanner
        className="aspect-square lg:aspect-video"
        layers={[
          {
            image: '/investment/locations.jpg',
            speed: -50,
            expanded: false,
          },
        ]}
      >
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,_rgba(214,207,200,0.00)_65.28%,_#D6CFC8_100%),_linear-gradient(180deg,_#D6CFC8_2.6%,_rgba(214,207,200,0.00)_45.83%)]" />
        {children}
      </ParallaxBanner>
    </ParallaxProvider>
  )
}

export default ParallaxBackground
