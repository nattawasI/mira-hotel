/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const JumpToIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
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
      <path
        d="M13.5324 1.49731L8.07422 6.95548"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.51074 1.49731H13.5326V5.51912"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.3722 10.4027V13.5627L1.4668 13.5627L1.4668 4.65723H4.62679"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
})

JumpToIcon.displayName = 'JumpToIcon'

export default JumpToIcon
