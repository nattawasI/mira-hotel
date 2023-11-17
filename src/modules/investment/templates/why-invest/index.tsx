'use client'

/** libs */
import { useState } from 'react'

/** components */
import WhyInvestAccordion from '@/modules/investment/components/why-invest-accordion'
import WhyInvestSlide from '@/modules/investment/components/why-invest-slide'

/** hooks */
import { useMediaQuery } from '@mantine/hooks'

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
    srcImage: '/investment/investment-hero.jpg',
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
    srcImage: '/investment/investment-hero.jpg',
    title: 'Sustainable Growth',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const WhyInvest = (): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const [active, setActive] = useState<string>('0')

  return (
    <div id="why-invest" className="content-container py-2">
      {typeof isDesktop !== 'undefined' ? (
        <div className="rounded-xl bg-primary px-1.25 py-1.5 lg:px-3">
          {isDesktop ? (
            <WhyInvestSlide data={whyInvestList} active={active} setActive={setActive} />
          ) : (
            <WhyInvestAccordion data={whyInvestList} active={active} setActive={setActive} />
          )}
        </div>
      ) : null}
    </div>
  )
}

export default WhyInvest
