/** components */
import ParallaxBackground from '@/modules/investment/components/parallax-background'
import AdvertisingLabel from '@/modules/investment/components/advertising-label'

const ParallaxSection = (): JSX.Element => {
  return (
    <ParallaxBackground>
      <div className="absolute left-0 top-3 z-20 flex w-full flex-col items-center justify-center gap-y-3 md:top-[10rem]">
        <div>
          <AdvertisingLabel icon="home">Designed for your comfort</AdvertisingLabel>
        </div>
        <div className="flex flex-col gap-y-3 md:gap-x-[21rem] lg:flex-row">
          <AdvertisingLabel icon="airplane">Elevate your living experience</AdvertisingLabel>
          <AdvertisingLabel icon="phone">Smart living, seamlessly integrated</AdvertisingLabel>
        </div>
      </div>
    </ParallaxBackground>
  )
}

export default ParallaxSection
