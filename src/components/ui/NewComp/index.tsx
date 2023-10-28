/** libs */
import { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'

type NewCompProps = HTMLAttributes<HTMLDivElement>

const NewComp = forwardRef<HTMLDivElement, NewCompProps>((props, forwardedRef): JSX.Element => {
  const { className, ...restProps } = props

  return <div {...restProps} ref={forwardedRef} className={cln(className)} />
})

NewComp.displayName = 'NewComp'

export { NewComp, type NewCompProps }
