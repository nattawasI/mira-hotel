/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const NullIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill="currentColor"
      />
    </svg>
  )
})

NullIcon.displayName = 'NullIcon'

export default NullIcon
