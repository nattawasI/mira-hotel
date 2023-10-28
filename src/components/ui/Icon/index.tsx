/** libs */
import { forwardRef, SVGAttributes } from 'react'

/** components */
import NullIcon from '@/components/ui/Icon/NullIcon'

/** constants */
const iconNameArray = ['null'] as const

type IconNameType = (typeof iconNameArray)[number]

type IconProps = SVGAttributes<SVGElement> & {
  icon?: IconNameType
  className?: string
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, forwardedRef): JSX.Element => {
  const { icon = 'null', ...restProps } = props

  const iconEl: Record<IconNameType, JSX.Element> = {
    null: <NullIcon {...restProps} ref={forwardedRef} />,
  }

  return <>{iconEl[icon]}</>
})

Icon.displayName = 'Icon'

export { Icon, iconNameArray, type IconProps, type IconNameType }
