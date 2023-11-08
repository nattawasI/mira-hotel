/** libs */
import { HTMLAttributes, LabelHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'

type FormGroupProps = HTMLAttributes<HTMLDivElement>

const FormGroupRoot = forwardRef<HTMLDivElement, FormGroupProps>((props, forwardedRef): JSX.Element => {
  const { className, children, ...restProps } = props

  return (
    <div {...restProps} ref={forwardedRef} className={cln('flex flex-col gap-y-0.25', className)}>
      {children}
    </div>
  )
})

FormGroupRoot.displayName = 'FormGroup'

type FormGroupLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  isRequired?: boolean
}

const FormGroupLabel = forwardRef<HTMLLabelElement, FormGroupLabelProps>((props, forwardedRef): JSX.Element => {
  const { isRequired, className, children, ...restProps } = props

  return (
    <label {...restProps} ref={forwardedRef} className={cln('text-0.875 font-medium', className)}>
      {children}
      {isRequired ? <span className="ml-0.25 text-secondary">*</span> : null}
    </label>
  )
})

FormGroupLabel.displayName = 'FormGroup.Label'

const FormGroup = Object.assign(FormGroupRoot, {
  Label: FormGroupLabel,
})

export { FormGroup, type FormGroupProps, type FormGroupLabelProps }
