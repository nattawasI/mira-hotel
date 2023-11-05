/** libs */
import { cln } from '@/libs/utils'
import Image from 'next/image'

/** components */
import { Button } from '@/components/ui/Button'

const Hero = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 bg-secondary lg:h-screen lg:grid-cols-2">
      <div className="lg:flex lg:items-center lg:justify-end">
        <div className="flex flex-col items-center px-1.25 pb-2 pt-[8.5rem] text-center lg:w-[36.25rem] lg:items-start lg:pb-0 lg:pr-[7rem] lg:pt-0 lg:text-left">
          <div className="mb-1 flex flex-col gap-y-0.5">
            <h1 className="title-uppercase">Welcome to Mira Investments</h1>
            <h2 className="title-large">Embark on your investment journey</h2>
          </div>
          <p>
            Step into a World of Investment Excellence with Mira. Our journey to redefine the investment experience
            starts here.
            <br />
            <br />
            Unveil a realm of endless possibilities where your investments can flourish.
          </p>
          <Button icon="arrow-down" className="mt-2 max-w-[23rem]">
            Investment opportunities
          </Button>
        </div>
      </div>
      <div
        className={cln(
          'relative h-[19.125rem] sm:h-[37.5rem] lg:h-full',
          'sm:after:bg-[linear-gradient(180deg,_#CA9214_0%,_rgba(202,146,20,0.00)_46%)]',
          'lg:after:bg-[linear-gradient(180deg,_#CA9214_0%,_rgba(202,146,20,0.00)_56.83%)]',
          'after:absolute after:inset-0 after:z-10 after:content-[""]',
        )}
      >
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
