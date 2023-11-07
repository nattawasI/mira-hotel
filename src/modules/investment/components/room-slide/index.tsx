'use client'

/** libs */
import Image from 'next/image'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'

/** components */
import ArrowButton from '@/modules/investment/components/room-slide/arrow-button'

const imageList = ['/investment/room-detail-1.jpg', '/investment/room-detail-1.jpg', '/investment/room-detail-1.jpg']

const RoomSlide = (): JSX.Element => {
  return (
    <Splide
      id="room-slide"
      className="group/room-slide aspect-square overflow-hidden rounded-xl md:aspect-video lg:aspect-square lg:flex-1"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute right-0.75 top-0.75 text-white"
            >
              <path
                d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0322 18.3914 14.0616C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94942 18.7935 8.90911 18.3914 7.93848C17.9894 6.96785 17.4001 6.08591 16.6572 5.34302C15.9143 4.60014 15.0324 4.01084 14.0618 3.6088C13.0911 3.20675 12.0508 2.99982 11.0002 2.99982C9.9496 2.99982 8.90929 3.20675 7.93866 3.6088C6.96803 4.01084 6.08609 4.60014 5.34321 5.34302C3.84288 6.84335 3 8.87824 3 11C3 13.1218 3.84288 15.1567 5.34321 16.657C6.84354 18.1574 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1574 16.6572 16.657ZM11.0002 8.00002V14M8.00021 11H14.0002"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </SplideSlide>
        ))}
      </SplideTrack>
      <div className="splide__arrows invisible opacity-0 transition-all duration-150 group-hover/room-slide:visible group-hover/room-slide:opacity-100">
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

export default RoomSlide
