/** libs */
import { HTMLAttributes } from 'react'

/** components */
import Logo from '@/components/global/footer/logo'
import Contact from '@/components/global/footer/contact'
import FollowUs from '@/components/global/footer/follow-us'

type FooterProps = HTMLAttributes<HTMLDivElement>

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer {...props}>
      <div className="content-container flex flex-col items-center gap-3 py-[5.38rem] md:flex-row md:justify-between">
        <Logo />
        <Contact />
        <FollowUs />
      </div>
    </footer>
  )
}

export default Footer
