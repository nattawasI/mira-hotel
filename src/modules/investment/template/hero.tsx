/** libs */
import Image from 'next/image'

/** components */
import { Button } from '@/components/ui/Button'

const Hero = (): JSX.Element => {
  return (
    <div className="bg-yellow grid grid-cols-1 lg:h-screen lg:grid-cols-2">
      <div className="lg:flex lg:items-center lg:justify-end">
        <div className="flex flex-col items-center px-1.25 pb-2 pt-[8.5rem] text-center lg:w-[36.25rem] lg:items-start lg:pb-0 lg:pr-[7rem] lg:pt-0 lg:text-left">
          <h1 className="title-uppercase mb-0.5 lg:mb-0.75">Welcome to Mira Investments</h1>
          <h2 className="title-large">Embark on your investment journey</h2>
          <p className="mt-1">
            Step into a World of Investment Excellence with Mira. Our journey to redefine the investment experience
            starts here.
            <br />
            <br />
            Unveil a realm of endless possibilities where your investments can flourish.
          </p>
          <Button icon="arrow-down" className="mt-2">
            Investment opportunities
          </Button>
        </div>
      </div>
      <div className="relative h-[19.125rem] sm:h-[37.5rem] lg:h-full">
        <Image
          src="/investment/investment-hero.jpg"
          alt="Embark on your investment journey"
          fill
          className="object-cover object-bottom"
        />
      </div>
    </div>
  )
}

export default Hero