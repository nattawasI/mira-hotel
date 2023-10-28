/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const LinkIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M8.21956 12.3158C7.42253 13.1128 6.34153 13.5605 5.21436 13.5605C4.08719 13.5605 3.00618 13.1128 2.20915 12.3158C1.41212 11.5187 0.964356 10.4377 0.964355 9.31055C0.964355 8.18338 1.41212 7.10237 2.20915 6.30534"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5.70915 2.80534C6.50618 2.00831 7.58719 1.56055 8.71436 1.56055C9.84153 1.56055 10.9225 2.00831 11.7196 2.80534C12.5166 3.60237 12.9644 4.68338 12.9644 5.81055C12.9644 6.93772 12.5166 8.01872 11.7196 8.81575"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M8.71436 5.81055L5.21436 9.31055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
})

LinkIcon.displayName = 'LinkIcon'

export default LinkIcon
