/** components */
import YourPathCard from '@/modules/investment/components/your-path-card'

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
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex gap-x-1 px-1 lg:gap-x-2 lg:px-2">
          <YourPathCard
            srcImage="/investment/discover.jpg"
            title="1. Discover"
            description="Explore Mira's investment concept and the available opportunities."
            className="flex-shrink-0"
          />
          <YourPathCard
            srcImage="/investment/evaluate.jpg"
            title="2. Evaluate"
            description="Dive deeper into the specifics and quantify the potential."
            className="flex-shrink-0"
          />
          <YourPathCard
            srcImage="/investment/invest.jpg"
            title="3. Invest"
            description="Take the leap and become a valued part of the global investment community."
            className="flex-shrink-0"
          />
          <YourPathCard
            srcImage="/investment/thrive.jpg"
            title="4. Thrive"
            description="Witness your investments flourish and be an integral part of the Mira success story."
            className="flex-shrink-0"
          />
        </div>
      </div>
    </div>
  )
}

export default YourPathToSuccess
