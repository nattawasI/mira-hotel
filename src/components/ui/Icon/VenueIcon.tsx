/** libs */
import { forwardRef } from 'react'

/** types */
import { IconProps } from '@/components/ui/Icon'

const VenueIcon = forwardRef<SVGSVGElement, IconProps>(({ ...props }, forwardedRef): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      {...props}
      ref={forwardedRef}
    >
      <path
        d="M8.87614 2.73665C8.87614 2.98773 8.82668 3.23635 8.7306 3.46832C8.63452 3.70029 8.49368 3.91106 8.31614 4.0886C8.1386 4.26614 7.92783 4.40698 7.69586 4.50306C7.46389 4.59914 7.21527 4.6486 6.96419 4.6486C6.71311 4.6486 6.46449 4.59914 6.23252 4.50306C6.00055 4.40698 5.78978 4.26614 5.61224 4.0886C5.4347 3.91106 5.29387 3.70029 5.19778 3.46832C5.1017 3.23635 5.05225 2.98773 5.05225 2.73665C5.05225 2.48557 5.1017 2.23695 5.19778 2.00498C5.29387 1.77301 5.4347 1.56224 5.61224 1.3847C5.78978 1.20716 6.00055 1.06633 6.23252 0.970245C6.46449 0.874161 6.71311 0.824707 6.96419 0.824707C7.21527 0.824707 7.46389 0.874161 7.69586 0.970245C7.92783 1.06633 8.1386 1.20716 8.31614 1.3847C8.49368 1.56224 8.63452 1.77302 8.7306 2.00498C8.82668 2.23695 8.87614 2.48557 8.87614 2.73665L8.87614 2.73665Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.96436 4.64844V9.32208" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M4.41509 7.41016C2.52645 7.8273 1.22852 8.74604 1.22852 9.74697C1.22852 11.1549 3.79654 12.2962 6.96435 12.2962C10.1322 12.2962 12.7002 11.1549 12.7002 9.74697C12.7002 8.74604 11.4023 7.8273 9.51361 7.41016"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
})

VenueIcon.displayName = 'VenueIcon'

export default VenueIcon
