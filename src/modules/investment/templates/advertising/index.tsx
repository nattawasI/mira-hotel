/** libs */
import Image from 'next/image'

/** components */
import AdvertisingLabel from '@/modules/investment/components/advertising-label'

const Advertising = (): JSX.Element => {
  return (
    <div className="relative pt-[150%] sm:pt-[87.5%] lg:pt-[50%]">
      <Image src="/investment/locations.jpg" alt="" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,_rgba(214,207,200,0.00)_65.28%,_#D6CFC8_100%),_linear-gradient(180deg,_#D6CFC8_2.6%,_rgba(214,207,200,0.00)_45.83%)]" />
      <div className="absolute left-0 top-[8.5%] z-20 flex w-full flex-col items-center justify-center gap-y-3 lg:top-[22.73%]">
        <div>
          <AdvertisingLabel icon="home">Designed for your comfort</AdvertisingLabel>
        </div>
        <div className="flex flex-col gap-y-3 md:gap-x-[21rem] lg:flex-row">
          <AdvertisingLabel icon="airplane">Elevate your living experience</AdvertisingLabel>
          <AdvertisingLabel icon="phone">Smart living, seamlessly integrated</AdvertisingLabel>
        </div>
      </div>
    </div>
  )
}

export default Advertising
