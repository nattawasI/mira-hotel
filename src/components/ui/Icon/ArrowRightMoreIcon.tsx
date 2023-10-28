/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const ArrowRightMoreIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="19"
      viewBox="0 0 15 19"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M4.41553 17.0044L10.4155 9.4713L4.41553 1.9382"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

ArrowRightMoreIcon.displayName = 'ArrowRightMoreIcon'

export default ArrowRightMoreIcon
