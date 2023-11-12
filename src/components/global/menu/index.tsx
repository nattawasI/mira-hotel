'use client'

/** libs */
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'

type MenuItemType = {
  id: string
  label: string
  href: string
}

const menuList: MenuItemType[] = [
  {
    id: 'brand',
    label: 'Brand',
    href: '/brand',
  },
  {
    id: 'investment',
    label: 'Investment',
    href: '/investment',
  },
  {
    id: 'faq',
    label: 'FAQ',
    href: '/investment/#faq',
  },
  {
    id: 'contact-us',
    label: 'Contact Us',
    href: '/investment/#contact-us',
  },
]

const animateDuration = 250
const motionValue = {
  hidden: { transform: 'translateX(calc(100%))', transition: { duration: animateDuration / 1000 } },
  show: { transform: 'translateX(0)', transition: { duration: animateDuration / 1000 } },
}

type MenuProps = {
  theme?: 'dark' | 'light'
}

const Menu = ({ theme }: MenuProps): JSX.Element => {
  const pathname = usePathname()

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-lg bg-[rgba(233,227,220,0.40)]">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
          <path d="M21 4H1M21 10.25H1M21 16.5H1" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-[rgba(214,_207,_200,_0.20)] backdrop-blur-[3px] max-md:hidden" />
            <Dialog.Content
              className="no-scrollbar fixed right-0 top-0 z-50 h-[100dvh] w-full overflow-y-auto md:w-[21.5rem]"
              forceMount
            >
              <motion.div
                variants={motionValue}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h-full bg-white px-2 pb-1.5 pt-[5rem]"
              >
                <Dialog.Close className="fixed right-2 top-1.5 z-10 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 10.5857L17.243 5.34274C17.6335 4.95228 18.2665 4.95228 18.657 5.34274C19.0475 5.73321 19.0475 6.36628 18.657 6.75674L13.414 11.9997L18.657 17.2427C19.0475 17.6332 19.0475 18.2663 18.657 18.6567C18.2665 19.0472 17.6335 19.0472 17.243 18.6567L12 13.4137L6.75699 18.6567C6.36652 19.0472 5.73345 19.0472 5.34299 18.6567C4.95252 18.2663 4.95252 17.6332 5.34299 17.2427L10.586 11.9997L5.34299 6.75674C4.95252 6.36628 4.95252 5.73321 5.34299 5.34274C5.73345 4.95228 6.36652 4.95228 6.75699 5.34274L12 10.5857Z"
                      fill="#1A1A1A"
                    />
                  </svg>
                </Dialog.Close>
                <div className="flex flex-col py-1">
                  {menuList.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="transition-colors-150 block py-0.5 text-2 capitalize hover:text-primary"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  )
}

export default Menu
