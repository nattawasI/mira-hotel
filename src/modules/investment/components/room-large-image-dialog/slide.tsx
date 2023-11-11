'use client'

/** libs */
import Image from 'next/image'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'

/** components */
import { CircleIconButton } from '@/components/ui/circle-icon-button'

type SlideProps = {
  images: string[]
}

const Slide = ({ images }: SlideProps): JSX.Element => {
  return (
    <Splide
      hasTrack={false}
      options={{
        gap: 0,
        classes: {
          pagination: 'absolute bottom-0.75 left-0 w-full flex items-center justify-center gap-0.25 leading-[0]',
          page: 'w-[0.375rem] h-[0.375rem] bg-white rounded-full [&.is-active]:bg-primary [&.is-active]:w-0.5 [&.is-active]:h-0.5 transition-colors duration-150',
        },
      }}
    >
      <SplideTrack>
        {images.map((item, index) => (
          <SplideSlide className="flex max-h-full items-center justify-center" key={index}>
            <Image src={item} alt="" width={994} height={994} className="max-h-full w-auto" />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows">
        <CircleIconButton
          icon="prev"
          className="splide__arrow splide__arrow--prev absolute left-1.5 top-1/2 z-10 -translate-y-1/2 disabled:hidden"
        />
        <CircleIconButton
          icon="next"
          className="splide__arrow splide__arrow--next absolute right-1.5 top-1/2 z-10 -translate-y-1/2 disabled:hidden"
        />
      </div>
    </Splide>
  )
}

export default Slide
