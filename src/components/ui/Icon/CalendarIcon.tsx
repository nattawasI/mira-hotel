/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const CalendarIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <rect
        x="1.63477"
        y="3.00732"
        width="10.6592"
        height="8.88265"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M4.39844 1.23096V3.00749" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M9.53027 1.23096V3.00749" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M1.63477 5.57373H12.2939" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
})

CalendarIcon.displayName = 'CalendarIcon'

export default CalendarIcon
