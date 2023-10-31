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
        'flex h-[3.38rem] w-full items-center justify-between gap-0.75 text-left text-1.25 text-base sm:h-[4.25rem] sm:text-2',
        'transition-colors duration-150',
        isActive ? 'text-secondary' : '',
        className,
      )}
    >
      {children}
    </button>
  )
})

WhyInvestButton.displayName = 'WhyInvestButton'

export default WhyInvestButton
