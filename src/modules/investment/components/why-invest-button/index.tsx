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
        'xl:text-2.25 text-1.5 flex min-h-[3.75rem] w-full items-center justify-between gap-0.75 py-0.5 text-left text-secondary lg:py-1',
        isActive ? 'text-yellow font-medium' : '',
        className,
      )}
    >
      {children}
    </button>
  )
})

WhyInvestButton.displayName = 'WhyInvestButton'

export default WhyInvestButton
