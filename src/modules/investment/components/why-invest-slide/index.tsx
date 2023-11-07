'use client'

/** libs */
import { useEffect, useRef } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'

/** components */
import WhyInvestButton from '@/modules/investment/components/why-invest-button'
import WhyInvestCard from '@/modules/investment/components/why-invest-card'

/** types */
import { WhyInvestType } from '@/modules/investment/templates/why-invest'

type WhyInvestSlideProps = {
  data: WhyInvestType[]
  active: string
  setActive: (value: string) => void
}

const WhyInvestSlide = (props: WhyInvestSlideProps): JSX.Element => {
  const { data, active, setActive } = props

  const splideRef = useRef<Splide>(null)

  const handleSelect = (index: number) => {
    splideRef.current?.go(index)
    setActive(index.toString())
  }

  useEffect(() => {
    splideRef.current?.go(Number(active))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <div className="flex flex-col justify-center">
        <h2 className="title-uppercase mb-1 text-base">Why Invest with Mira?</h2>
        <div>
          {data.map((item, index) => {
            const isActive = index === Number(active)
            return (
              <div key={item.id} className="border-t border-base first:border-0">
                <WhyInvestButton isActive={isActive} onClick={() => handleSelect(index)}>
                  {item.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <path
                      d="M28 8.84204C28 10.1308 29.2828 12.0552 30.5813 13.6705C32.2508 15.7547 34.2458 17.5731 36.533 18.9609C38.248 20.0013 40.327 20.9999 42 20.9999M42 20.9999C40.327 20.9999 38.2462 21.9986 36.533 23.039C34.2458 24.4285 32.2508 26.2469 30.5813 28.3277C29.2828 29.9447 28 31.8726 28 33.1578M42 20.9999L1.13749e-06 20.9999"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </WhyInvestButton>
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <Splide
          ref={splideRef}
          options={{
            type: 'fade',
            speed: 700,
            arrows: false,
            drag: false,
            pagination: false,
          }}
        >
          {data.map((item) => (
            <SplideSlide key={item.id}>
              <WhyInvestCard srcImage={item.srcImage} title={item.title} description={item.description} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default WhyInvestSlide
