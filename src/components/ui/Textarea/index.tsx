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
        'placeholder:text-black-50 resize-none rounded-lg border border-black bg-transparent p-1 text-0.875 focus:border-primary',
        className,
      )}
    />
  )
})

Textarea.displayName = 'Textarea'

export { Textarea, type TextareaProps }
