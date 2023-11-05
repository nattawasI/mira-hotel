/** libs */
import { InputHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>((props, forwardedRef): JSX.Element => {
  const { type = 'text', className, ...restProps } = props

  return (
    <input
      {...restProps}
      ref={forwardedRef}
      type={type}
      className={cln(
        'flex h-[3.125rem] w-full items-center rounded-lg border border-black-50 bg-transparent px-1 text-1 font-medium placeholder:text-black-50 focus:border-black',
        className,
      )}
    />
  )
})

Input.displayName = 'Input'

export { Input, type InputProps }
