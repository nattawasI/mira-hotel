/** libs */
import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardedRef): JSX.Element => {
  const { className, ...restProps } = props

  return (
    <textarea
      {...restProps}
      ref={forwardedRef}
      className={cln(
        'rounded-lg border border-black bg-transparent p-1 text-0.875 placeholder:text-[rgba(15,_15,_15,_0.50)] focus:border-primary',
        className,
      )}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea, type TextareaProps }
