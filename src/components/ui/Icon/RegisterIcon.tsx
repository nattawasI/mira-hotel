/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const RegisterIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="15"
      viewBox="0 0 13 15"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M1.71436 13.8105H12.2144"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.71436 10.8105V7.81055L8.36128 1.6384C8.55836 1.4554 8.86489 1.46108 9.05506 1.65125L10.8737 3.46985C11.0638 3.66002 11.0695 3.96655 10.8865 4.16362L4.71436 10.8105H1.71436Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

RegisterIcon.displayName = 'RegisterIcon'

export default RegisterIcon
