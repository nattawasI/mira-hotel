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
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
        <path
          d="M12.6667 4.5C12.6667 5.083 13.247 5.95357 13.8344 6.68429C14.5896 7.62714 15.4921 8.44979 16.5268 9.07757C17.3027 9.54821 18.2432 10 19 10M19 10C18.2432 10 17.3019 10.4518 16.5268 10.9224C15.4921 11.551 14.5896 12.3736 13.8344 13.3149C13.247 14.0464 12.6667 14.9186 12.6667 15.5M19 10L-2.40413e-07 10"
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

  return (
    <span className="transition-transform duration-150 group-hover/button:translate-x-0.5">
      {icon ? iconEl[icon] : null}
    </span>
  )
}

export { Button, ButtonLink }
