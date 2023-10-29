'use client'

/** libs */
import { cln } from '@/libs/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Popover from '@radix-ui/react-popover'

type MenuType = {
  label: string
  href: string
}

const menus: MenuType[] = [
  {
    label: 'Brand',
    href: '/brand',
  },
  {
    label: 'Investment',
    href: '/investment',
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
]

type MenuProps = {
  theme?: 'dark' | 'light'
}

const Menu = ({ theme }: MenuProps): JSX.Element => {
  const pathname = usePathname()
  return (
    <Popover.Root>
      <Popover.Trigger>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M25 8.75H5M25 15H5M25 21.25H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Popover.Trigger>
      <Popover.Content
        side="bottom"
        sideOffset={8}
        align="end"
        alignOffset={-8}
        className="w-[12rem] rounded-md bg-[rgba(214,207,200,0.70)] px-1.5 py-1"
      >
        {menus.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cln(
              'transition-colors-150 block text-1 leading-[2.375rem] hover:text-primary',
              item.href === pathname ? 'font-medium' : '',
            )}
          >
            {item.label}
          </Link>
        ))}
      </Popover.Content>
    </Popover.Root>
  )
}

export default Menu
