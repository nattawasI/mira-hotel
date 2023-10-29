'use client'

/** libs */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/** components */
import WhyInvestButton from '@/modules/investment/components/why-invest-button'
import WhyInvestCard from '@/modules/investment/components/why-invest-card'

/** types */
import { WhyInvestType } from '@/modules/investment/template/why-invest'

type WhyInvestSlideProps = {
  data: WhyInvestType[]
}

const WhyInvestSlide = (props: WhyInvestSlideProps): JSX.Element => {
  const { data } = props

  const [active, setActive] = useState<WhyInvestType>(data[0])

  const handleSelect = (item: WhyInvestType) => {
    if (item.id === active.id) return
    setActive(item)
  }

  return (
    <div className="gap-x-4 grid grid-cols-2">
      <div className="flex flex-col justify-center">
        <h2 className="title-uppercase mb-1 text-secondary">Why Invest with Mira?</h2>
        <div>
          {data.map((item) => {
            const isActive = item.id === active.id
            return (
              <div key={item.id} className="border-t border-secondary first:border-0">
                <WhyInvestButton isActive={isActive} onClick={() => handleSelect(item)}>
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path
                      d="M28 8.84204C28 10.1308 29.2828 12.0552 30.5813 13.6705C32.2508 15.7547 34.2458 17.5731 36.533 18.9609C38.248 20.0013 40.327 20.9999 42 20.9999M42 20.9999C40.327 20.9999 38.2462 21.9986 36.533 23.039C34.2458 24.4285 32.2508 26.2469 30.5813 28.3277C29.2828 29.9447 28 31.8726 28 33.1578M42 20.9999L1.13749e-06 20.9999"
                      stroke="currentColor"
                      strokeWidth={isActive ? '3' : '2'}
                    />
                  </svg>
                </WhyInvestButton>
              </div>
            )
          })}
        </div>
      </div>
      <div className="relative aspect-square">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <WhyInvestCard srcImage={active.srcImage} title={active.title} description={active.description} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default WhyInvestSlide
