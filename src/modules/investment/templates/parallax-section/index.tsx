'use client'

/** libs */
import { cln } from '@/libs/utils'
import Image from 'next/image'

/** components */

const ParallaxSection = (): JSX.Element => {
  return (
    <div className="relative h-[35.9375rem] overflow-hidden lg:h-[44.8125rem]">
      <Image src="/investment/locations.jpg" alt="" fill className="object-cover object-center" />
    </div>
  )
}

export default ParallaxSection
