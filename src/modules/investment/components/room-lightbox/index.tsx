'use client'

/** libs */
import { useState, useEffect, RefObject } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css/core'
import { AnimatePresence, motion } from 'framer-motion'

/** components */
import { CircleIconButton } from '@/components/ui/circle-icon-button'

const animateDuration = 250
const motionValue = {
  hidden: { opacity: 0, transition: { duration: animateDuration / 1000 } },
  show: { opacity: 1, transition: { duration: animateDuration / 1000 } },
}

type RoomLightBoxProps = Dialog.DialogProps & {
  images: string[]
  mainSlideRef?: RefObject<Splide>
  start?: number
}

const RoomLightBox = (props: RoomLightBoxProps): JSX.Element => {
  const { images, mainSlideRef, start, open, ...restProps } = props

  const [modalRootEl, setModalRootEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setModalRootEl(document.getElementById('modal-root'))
  }, [])

  return (
    <Dialog.Root {...restProps} open={open}>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount container={modalRootEl}>
            <Dialog.Overlay className="fixed inset-0" />
            <Dialog.Content
              className="fixed inset-0 z-40 flex h-[100dvh] items-center justify-center bg-[rgba(51,51,51,0.60)] outline-none"
              forceMount
            >
              <motion.div variants={motionValue} initial="hidden" animate="show" exit="hidden">
                <Dialog.Close asChild>
                  <CircleIconButton icon="close" className="fixed right-1.5 top-1.5 z-40" />
                </Dialog.Close>
                <Splide
                  hasTrack={false}
                  options={{
                    start: start,
                    gap: 0,
                    classes: {
                      pagination:
                        'absolute bottom-0.75 left-0 w-full flex items-center justify-center gap-0.25 leading-[0]',
                      page: 'w-[0.375rem] h-[0.375rem] bg-white rounded-full [&.is-active]:bg-primary [&.is-active]:w-0.5 [&.is-active]:h-0.5 transition-colors duration-150',
                    },
                    arrows: false,
                    mediaQuery: 'min',
                    breakpoints: {
                      768: {
                        arrows: true,
                      },
                    },
                  }}
                  onMove={(_, dest) => mainSlideRef?.current?.go(dest)}
                >
                  <SplideTrack>
                    {images.map((item, index) => (
                      <SplideSlide className="flex h-[calc(100dvh-3rem)] items-center justify-center" key={index}>
                        <Image
                          src={item}
                          alt=""
                          width={1000}
                          height={1000}
                          className="h-full max-h-full w-auto max-w-full"
                        />
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
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export default RoomLightBox
