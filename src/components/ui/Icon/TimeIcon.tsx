/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const TimeIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <circle cx="7.96436" cy="7.56055" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7.96436 3.9873V7.56045L9.69252 9.01448"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

TimeIcon.displayName = 'TimeIcon'

export default TimeIcon
