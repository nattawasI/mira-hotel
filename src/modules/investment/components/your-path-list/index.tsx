'use client'

/** components */
import YourPathCard from '@/modules/investment/components/your-path-card'

const YourPathList = (): JSX.Element => {
  return (
    <div className="content-container no-scrollbar overflow-x-auto">
      <div className="flex gap-x-1 lg:gap-x-2">
        <div className="flex-shrink-0">
          <YourPathCard
            srcImage="/investment/discover.jpg"
            title="1. Discover"
            description="Explore Mira's investment concept and the available opportunities."
            className="h-full"
          />
        </div>
        <div className="flex-shrink-0">
          <YourPathCard
            srcImage="/investment/evaluate.jpg"
            title="2. Evaluate"
            description="Dive deeper into the specifics and quantify the potential."
            className="h-full"
          />
        </div>
        <div className="flex-shrink-0">
          <YourPathCard
            srcImage="/investment/invest.jpg"
            title="3. Invest"
            description="Take the leap and become a valued part of the global investment community."
            className="h-full"
          />
        </div>
        <div className="flex-shrink-0 pr-1.25">
          <YourPathCard
            srcImage="/investment/thrive.jpg"
            title="4. Thrive"
            description="Witness your investments flourish and be an integral part of the Mira success story."
            className="h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default YourPathList
