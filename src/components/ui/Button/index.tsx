/** libs */
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'
import { VariantProps } from 'tailwind-variants'
import Link, { type LinkProps } from 'next/link'

/** components */
import { Icon, type IconNameType } from '@/components/ui/Icon'

/** styled */
import { styled } from '@/components/ui/Button/styled'

type ButtonIconProps = {
  icon?: IconNameType
}

type ButtonVariantProps = Omit<VariantProps<typeof styled>, 'hasIcon'>
type ButtonCommonProps = ButtonVariantProps & ButtonIconProps

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonCommonProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef): JSX.Element => {
  const { type = 'button', variant = 'solid', isResponsive = false, icon, className, children, ...restProps } = props

  return (
    <button
      {...restProps}
      ref={forwardedRef}
      type={type}
      className={cln(styled({ variant, isResponsive, hasIcon: Boolean(icon) }), className)}
    >
      <ButtonIcon icon={icon} />
      {children}
    </button>
  )
})

Button.displayName = 'Button'

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & ButtonCommonProps

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, forwardedRef): JSX.Element => {
  const { variant = 'solid', isResponsive = false, icon, className, children, ...restProps } = props

  return (
    <Link
      {...restProps}
      ref={forwardedRef}
      className={cln(styled({ variant, isResponsive, hasIcon: Boolean(icon) }), className)}
    >
      <ButtonIcon icon={icon} />
      {children}
    </Link>
  )
})

ButtonLink.displayName = 'ButtonLink'

const ButtonIcon = ({ icon }: ButtonIconProps): JSX.Element => {
  return (
    <>
      {icon ? (
        <span className="flex justify-center items-center w-[0.875rem] h-[0.875]">
          <Icon icon={icon} />
        </span>
      ) : null}
    </>
  )
}

export { Button, ButtonLink }
