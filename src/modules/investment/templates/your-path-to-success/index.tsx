/** components */
import YourPathList from '@/modules/investment/components/your-path-list'

const YourPathToSuccess = (): JSX.Element => {
  return (
    <div>
      <div className="content-container pb-2 pt-[4.70rem] lg:pt-[9.38rem]">
        <div className="heading-lead mb-3 lg:mb-[3.5rem]">
          <h2 className="heading-lead__title">Your Path to Success</h2>
          <h3 className="heading-lead__title-large">A four-step journey to investment</h3>
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
      <YourPathList />
    </div>
  )
}

export default YourPathToSuccess
