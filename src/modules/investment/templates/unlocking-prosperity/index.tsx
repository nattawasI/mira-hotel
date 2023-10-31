/** libs */
import { cln } from '@/libs/utils'

const UnlockingProsperity = (): JSX.Element => {
  return (
    <>
      <div className="content-container flex justify-center pb-2 pt-[4.7rem] sm:pt-[9.38rem]">
        <div className="heading-lead">
          <h2 className="heading-lead__title">Unlocking Prosperity</h2>
          <h3 className="heading-lead__title-large">Your path to global real estate</h3>
          <div className="heading-lead__description">
            <p>At Mira, our vision extends far beyond the horizon.</p>
            <p>We are committed to creating investment opportunities that redefine your financial landscape.</p>
            <p>
              With Mira, your investments can transport you to exciting destinations while yielding exceptional returns.
              <br />
              Let&apos;s explore the heart of this adventure.
            </p>
          </div>
        </div>
      </div>
      <div
        className={cln(
          'flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-2 lg:gap-[8rem]',
          'h-[18.75rem]',
          'lg:h-[31.25rem]',
          'bg-[url("/investment/vector-dotted-map-of-world-small.png")]',
          'sm:bg-[url("/investment/vector-dotted-map-of-world.png")]',
          'bg-[length:auto_100%] bg-center bg-no-repeat',
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
