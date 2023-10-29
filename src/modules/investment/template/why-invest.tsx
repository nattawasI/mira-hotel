'use client'

/** components */
import WhyInvestAccordion from '@/modules/investment/components/why-invest-accordion'

const WhyInvest = (): JSX.Element => {
  return (
    <div className="content-container py-2">
      <div className="rounded-xl bg-primary px-1.25 py-1.5 lg:px-3">
        <p className="title-uppercase mb-1 text-secondary">Why Invest with Mira?</p>
        <WhyInvestAccordion />
      </div>
    </div>
  )
}

export default WhyInvest
