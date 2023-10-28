/** libs */
import { HTMLAttributes } from 'react'

/** components */
import Logo from '@/components/global/footer/logo'

type FooterProps = HTMLAttributes<HTMLDivElement>

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <footer {...props}>
      <div className="flex flex-col justify-center content-container py-[5.38rem] md:flex-row md:justify-start">
        <Logo />
      </div>
    </footer>
  )
}

export default Footer
