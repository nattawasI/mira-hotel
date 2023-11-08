/** libs */
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = (): JSX.Element => {
  const { ref: parallaxRef } = useParallax<HTMLImageElement>({ speed: -50 })

  return (
    <Image
      ref={parallaxRef}
      src="/investment/locations.jpg"
      alt=""
      width={1440}
      height={717}
      className="absolute left-0 top-0 h-auto w-full"
    />
  )
}

export default ParallaxImage
