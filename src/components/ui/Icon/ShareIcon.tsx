/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const ShareIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M8.96464 3.24756L2.92676 7.56033L8.96464 11.8731"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="2.92688" cy="7.56067" r="2.25452" fill="currentColor" />
      <circle cx="8.96497" cy="12.0695" r="2.25452" fill="currentColor" />
      <circle cx="9.00159" cy="3.0514" r="2.25452" fill="currentColor" />
    </svg>
  )
})

ShareIcon.displayName = 'ShareIcon'

export default ShareIcon
