'use client'

/** libs */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxImage = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div style={{ y }}>
      <Image src="/investment/locations.jpg" alt="" width={1440} height={717} className="h-auto w-full" />
    </motion.div>
  )
}

export default ParallaxImage
