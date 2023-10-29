/** libs */

import { cln } from '@/libs/utils'

/** components */

const UnlockingProsperity = (): JSX.Element => {
  return (
    <>
      <div className="content-container flex flex-col items-center pb-2 pt-[4.7rem] text-center sm:pt-[9.38rem]">
        <p className="title-uppercase mb-0.5">Unlocking Prosperity</p>
        <h2 className="title-large">Your path to global real estate</h2>
        <p className="mt-1.5">
          At Mira, our vision extends far beyond the horizon.
          <br />
          <br />
          We are committed to creating investment opportunities that redefine your financial landscape.
          <br />
          <br />
          With Mira, your investments can transport you to exciting destinations while yielding exceptional returns.
          <br />
          Let&apos;s explore the heart of this adventure.
        </p>
      </div>
      <div
        className={cln(
          'flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-2 lg:gap-[8rem]',
          'h-[18.75rem]',
          'lg:h-[31.25rem]',
          'bg-[url("/investment/vector-dotted-map-of-world-small.png")]',
          'sm:bg-[url("/investment/vector-dotted-map-of-world.png")]',
          'bg-[length:auto_100%] bg-center',
        )}
      >
        <div className="text-center">
          <div className="text-3.125 font-medium">25+</div>
          <div className="text-1.375">projected locations</div>
        </div>
        <div className="text-center">
          <div className="text-3.125 font-medium">17%</div>
          <div className="text-1.375">average annual returns</div>
        </div>
      </div>
    </>
  )
}

export default UnlockingProsperity
