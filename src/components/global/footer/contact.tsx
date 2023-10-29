/** libs */
import Link from 'next/link'

const Contact = (): JSX.Element => {
  return (
    <div className="inline-flex flex-col items-center gap-y-1">
      <div className="text-0.75 font-medium uppercase tracking-[0.135rem]">Connect with Mira</div>
      <div>
        <Link
          href="mailto:contact@mira.com"
          target="_blank"
          className="transition-colors-150 text-1 hover:text-primary"
        >
          contact@mira.com
        </Link>
      </div>
      <div>
        <Link href="tel:02 - 123 - 4567" className="transition-colors-150 text-1 hover:text-primary">
          02 - 123 - 4567
        </Link>
      </div>
    </div>
  )
}

export default Contact
