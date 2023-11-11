'use client'

/** libs */
import { useState, useEffect } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

/** components */
import { CircleIconButton } from '@/components/ui/circle-icon-button'
import Slide from '@/modules/investment/components/room-large-image-dialog/slide'

type RoomLargeImageDialogProps = Dialog.DialogProps & {
  images: string[]
}

const RoomLargeImageDialog = (props: RoomLargeImageDialogProps): JSX.Element => {
  const { images, ...restProps } = props

  const [modalRootEl, setModalRootEl] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setModalRootEl(document.getElementById('modal-root'))
  }, [])

  return (
    <Dialog.Root {...restProps} defaultOpen>
      <Dialog.Portal container={modalRootEl}>
        <Dialog.Content className="fixed inset-0 z-40 flex h-[100dvh] items-center justify-center bg-[rgba(51,51,51,0.60)] outline-none">
          <Dialog.Close asChild>
            <CircleIconButton icon="close" className="fixed right-1.5 top-1.5 z-40" />
          </Dialog.Close>
          <Slide images={images} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default RoomLargeImageDialog
