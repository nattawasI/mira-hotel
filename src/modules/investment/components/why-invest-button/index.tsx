/** libs */
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'

type WhyInvestButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive?: boolean
}

const WhyInvestButton = forwardRef<HTMLButtonElement, WhyInvestButtonProps>((props, forwardedRef) => {
  const { isActive, className, children, ...restProps } = props
  return (
    <button
      {...restProps}
      ref={forwardedRef}
      className={cln(
        'lg:text-2.25 flex w-full items-center gap-0.75 py-0.5 text-[1.5rem] leading-[3.75rem] text-secondary lg:py-1',
        isActive ? 'font-medium' : '',
        className,
      )}
    >
      {children}
    </button>
  )
})

WhyInvestButton.displayName = 'WhyInvestButton'

export default WhyInvestButton
