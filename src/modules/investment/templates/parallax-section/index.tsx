'use client'

/** libs */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  return (
    <div className="relative h-[35.9375rem] overflow-hidden lg:h-[44.8125rem]" ref={sectionRef}>
      <motion.div className="h-full w-full" style={{ y }}>
        <Image
          src="/investment/locations.jpg"
          alt=""
          // width={1440}
          // height={717}
          fill
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,_rgba(214,207,200,0.00)_65.28%,_#D6CFC8_100%),_linear-gradient(180deg,_#D6CFC8_2.6%,_rgba(214,207,200,0.00)_45.83%)]" />
    </div>
  )
}

export default ParallaxSection
