'use client'

/** components */
import WhyInvestAccordion from '@/modules/investment/components/why-invest-accordion'

export type WhyInvestType = {
  id: string
  srcImage: string
  title: string
  description: string
}

const whyInvestList: WhyInvestType[] = [
  {
    id: 'global-potential',
    srcImage: '/investment/why-invest.jpg',
    title: 'Global Potential',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'strategic-locations',
    srcImage: '/investment/why-invest.jpg',
    title: 'Strategic Locations',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'tech-enhanced-returns',
    srcImage: '/investment/why-invest.jpg',
    title: 'Tech-Enhanced Returns',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 'sustainable-growth',
    srcImage: '/investment/why-invest.jpg',
    title: 'Sustainable Growth',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const WhyInvest = (): JSX.Element => {
  return (
    <div className="content-container py-2">
      <div className="rounded-xl bg-primary px-1.25 py-1.5 lg:px-3">
        <p className="title-uppercase mb-1 text-secondary">Why Invest with Mira?</p>
        <WhyInvestAccordion data={whyInvestList} />
      </div>
    </div>
  )
}

export default WhyInvest
