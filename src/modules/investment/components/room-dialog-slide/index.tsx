'use client'

/** libs */
import Image from 'next/image'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'

/** components */
import { ArrowButton } from '@/components/ui/arrow-button'

const imageList = ['/investment/room-detail-1.jpg', '/investment/room-detail-1.jpg', '/investment/room-detail-1.jpg']

const RoomDialogSlide = (): JSX.Element => {
  return (
    <Splide
      id="room-slide"
      className="group/room-dialog-slide aspect-square overflow-hidden rounded-xl md:aspect-video lg:aspect-square lg:flex-1"
      hasTrack={false}
      options={{
        classes: {
          pagination: 'absolute bottom-0.75 left-0 w-full flex items-center justify-center gap-0.25 leading-[0]',
          page: 'w-[0.375rem] h-[0.375rem] bg-white rounded-full [&.is-active]:bg-primary [&.is-active]:w-0.5 [&.is-active]:h-0.5 transition-colors duration-150',
        },
      }}
    >
      <SplideTrack className="h-full w-full">
        {imageList.map((item, index) => (
          <SplideSlide
            className="relative aspect-square cursor-zoom-in overflow-hidden first:rounded-l-xl last:rounded-r-xl md:aspect-video lg:aspect-square"
            key={index}
          >
            <Image src={item} alt="" fill className="object-cover object-center" />
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows invisible opacity-0 transition-all duration-150 group-hover/room-dialog-slide:visible group-hover/room-dialog-slide:opacity-100">
        <ArrowButton
          dir="prev"
          className="splide__arrow splide__arrow--prev absolute left-0.75 top-1/2 z-10 -translate-y-1/2 disabled:hidden"
        />
        <ArrowButton
          dir="next"
          className="splide__arrow splide__arrow--next absolute right-0.75 top-1/2 z-10 -translate-y-1/2 disabled:hidden"
        />
      </div>
    </Splide>
  )
}

export default RoomDialogSlide
