/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const ArticleIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
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
      <path d="M3.88428 5.49023H6.17968" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3.88428 7.86426H8.04448" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M3.88428 10.2383H8.04448" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M6.03151 1.50488C6.56195 1.50488 7.07065 1.7156 7.44573 2.09067L10.0873 4.73227C10.4622 5.10714 10.6729 5.6155 10.6731 6.14564L10.6754 11.6154C10.6759 12.7203 9.78032 13.6162 8.67542 13.6162L3.25283 13.6162C2.14826 13.6162 1.25283 12.7208 1.25283 11.6162L1.25283 3.50488C1.25283 2.40031 2.14826 1.50488 3.25283 1.50488L6.03151 1.50488Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
})

ArticleIcon.displayName = 'ArticleIcon'

export default ArticleIcon
