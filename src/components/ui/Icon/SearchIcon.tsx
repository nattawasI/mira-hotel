/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const SearchIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
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
      <circle cx="6.79435" cy="6.39055" r="5.08" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.8228 10.4189L14.4252 14.0214" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
})

SearchIcon.displayName = 'SearchIcon'

export default SearchIcon
