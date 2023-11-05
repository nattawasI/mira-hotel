/** libs */
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'
import { VariantProps } from 'tailwind-variants'
import Link, { type LinkProps } from 'next/link'

/** styled */
import { styled } from '@/components/ui/Button/styled'

type ButtonIconProps = {
  icon?: 'arrow-down' | 'arrow-right'
}
type ButtonVariantProps = VariantProps<typeof styled>
type ButtonCommonProps = ButtonVariantProps & ButtonIconProps

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonCommonProps

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef): JSX.Element => {
  const { type = 'button', bg, icon, className, children, ...restProps } = props

  return (
    <button {...restProps} ref={forwardedRef} type={type} className={cln(styled({ bg }), className)}>
      <span>{children}</span>
      <ButtonIcon icon={icon} />
    </button>
  )
})

Button.displayName = 'Button'

type ButtonLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & ButtonCommonProps

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>((props, forwardedRef): JSX.Element => {
  const { bg, icon, className, children, ...restProps } = props

  return (
    <Link {...restProps} ref={forwardedRef} className={cln(styled({ bg }), className)}>
      <span>{children}</span>
      <ButtonIcon icon={icon} />
    </Link>
  )
})

ButtonLink.displayName = 'ButtonLink'

const ButtonIcon = (props: ButtonIconProps): JSX.Element => {
  const { icon } = props

  const iconEl: Record<Exclude<ButtonIconProps['icon'], undefined>, JSX.Element> = {
    'arrow-down': (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M15.5 13.1667C14.917 13.1667 14.0464 13.747 13.3157 14.3344C12.3729 15.0896 11.5502 15.9921 10.9224 17.0268C10.4518 17.8027 10 18.7432 10 19.5M10 19.5C10 18.7432 9.54821 17.8019 9.07757 17.0268C8.449 15.9921 7.62636 15.0896 6.68507 14.3344C5.95357 13.747 5.08143 13.1667 4.5 13.1667M10 19.5L10 0.5"
          stroke="currentColor"
        />
      </svg>
    ),
    'arrow-right': (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
        <path
          d="M12.6667 4.5C12.6667 5.083 13.247 5.95357 13.8344 6.68429C14.5896 7.62714 15.4921 8.44979 16.5268 9.07757C17.3027 9.54821 18.2432 10 19 10M19 10C18.2432 10 17.3019 10.4518 16.5268 10.9224C15.4921 11.551 14.5896 12.3736 13.8344 13.3149C13.247 14.0464 12.6667 14.9186 12.6667 15.5M19 10L-2.40413e-07 10"
          stroke="currentColor"
        />
      </svg>
    ),
  }

  return <span>{icon ? iconEl[icon] : null}</span>
}

export { Button, ButtonLink }
