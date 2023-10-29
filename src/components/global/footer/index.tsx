/** libs */
import { HTMLAttributes } from 'react'

/** components */
import Logo from '@/components/global/footer/logo'
import Contact from '@/components/global/footer/contact'
import FollowUs from '@/components/global/footer/follow-us'

/** types */
import { ThemeProps } from '@/components/global/types'

type FooterProps = HTMLAttributes<HTMLDivElement> & ThemeProps

const Footer = (props: FooterProps): JSX.Element => {
  const { theme = 'dark', ...restProps } = props
  return (
    <footer {...restProps}>
      <div className="content-container flex flex-col items-center gap-3 py-[5.38rem] md:flex-row md:justify-between">
        <Logo />
        <Contact />
        <FollowUs />
      </div>
    </footer>
  )
}

export default Footer
