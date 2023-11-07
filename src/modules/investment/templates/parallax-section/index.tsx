'use client'

/** libs */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

/** components */
import Label from '@/modules/investment/components/parallax-image/Label'

const ParallaxSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['center end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="relative h-[35.9375rem] overflow-hidden pt-3 lg:h-[44.8125rem] lg:pt-[10rem]" ref={sectionRef}>
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image src="/investment/locations.jpg" alt="" fill className="object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,_rgba(214,207,200,0.00)_65.28%,_#D6CFC8_100%),_linear-gradient(180deg,_#D6CFC8_2.6%,_rgba(214,207,200,0.00)_45.83%)]" />
      <div className="relative z-20 flex flex-col items-center gap-y-3">
        <div>
          <Label icon="home">Designed for your comfort</Label>
        </div>
        <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-[21rem]">
          <Label icon="airplane">Elevate your living experience</Label>
          <Label icon="phone">Smart living, seamlessly integrated</Label>
        </div>
      </div>
    </div>
  )
}

export default ParallaxSection
