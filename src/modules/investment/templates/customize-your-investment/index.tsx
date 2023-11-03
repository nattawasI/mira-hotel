const CustomizeYourInvestment = (): JSX.Element => {
  return (
    <div className="content-container pb-2 pt-[4.70rem] lg:pt-[9.38rem]">
      <div className="heading-lead mb-3 lg:mb-[3.5rem]">
        <h2 className="heading-lead__title">Customize Your Investment</h2>
        <h3 className="heading-lead__title-large">What you get & Why it matters</h3>
        <div className="heading-lead__description">
          <p>
            Mira Investments seamlessly combines the best of real estate investments and the future of travel.
            <br />
            By getting in early, you unlock access to a portfolio of prime properties in sought-after locations.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 rounded-xl bg-primary p-1.5 lg:grid-cols-2 lg:px-3 lg:pt-3">
        <div className="flex flex-col gap-1 text-base lg:gap-2">
          <h4 className="title-uppercase">Dividend Details</h4>
          <h5 className="title-large">
            Tax-advantaged 7-8% targeted annual dividend distributed quarterly, and 14% targeted annual return.
          </h5>
          <p className="text-1 lg:text-1.25">
            Protect your portfolio against inflation with high recurring income and long-term property appreciation.
          </p>
        </div>
        <div className="rounded-xl p-2">
          <div className="mb-1 flex flex-wrap items-end justify-between gap-0.75">
            <span className="text-1.375 font-medium lg:text-1.25">How much you invest</span>
            <span className="text-0.875">($10,000 minimum)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomizeYourInvestment
