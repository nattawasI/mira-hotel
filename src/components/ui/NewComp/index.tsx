/** libs */
import { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'
import { VariantProps } from 'tailwind-variants'

/** styled */
import { styled } from '@/components/ui/NewComp/styled'

type NewCompProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof styled>

const NewComp = forwardRef<HTMLDivElement, NewCompProps>((props, forwardedRef): JSX.Element => {
  const { className, ...restProps } = props

  const classStyled = styled()

  return <div {...restProps} ref={forwardedRef} className={cln(classStyled, className)} />
})

NewComp.displayName = 'NewComp'

export { NewComp, type NewCompProps }
