/** libs */
import { forwardRef, SVGAttributes } from 'react'

/** components */
import NullIcon from '@/components/ui/Icon/NullIcon'
import ArrowRightMoreIcon from '@/components/ui/Icon/ArrowRightMoreIcon'
import ArticleIcon from '@/components/ui/Icon/ArticleIcon'
import CalendarIcon from '@/components/ui/Icon/CalendarIcon'
import JumpToIcon from '@/components/ui/Icon/JumpToIcon'
import LinkIcon from '@/components/ui/Icon/LinkIcon'
import RegisterIcon from '@/components/ui/Icon/RegisterIcon'
import SearchIcon from '@/components/ui/Icon/SearchIcon'
import ShareIcon from '@/components/ui/Icon/ShareIcon'
import TimeIcon from '@/components/ui/Icon/TimeIcon'
import VenueIcon from '@/components/ui/Icon/VenueIcon'

/** constants */
const iconNameArray = [
  'null',
  'arrow-right-more',
  'article',
  'calendar',
  'jump-to',
  'link',
  'register',
  'search',
  'share',
  'time',
  'venue',
] as const

type IconNameType = (typeof iconNameArray)[number]

type IconProps = SVGAttributes<SVGElement> & {
  icon?: IconNameType
  className?: string
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, forwardedRef): JSX.Element => {
  const { icon = 'null', ...restProps } = props

  const iconEl: Record<IconNameType, JSX.Element> = {
    null: <NullIcon {...restProps} ref={forwardedRef} />,
    'arrow-right-more': <ArrowRightMoreIcon {...restProps} ref={forwardedRef} />,
    article: <ArticleIcon {...restProps} ref={forwardedRef} />,
    calendar: <CalendarIcon {...restProps} ref={forwardedRef} />,
    'jump-to': <JumpToIcon {...restProps} ref={forwardedRef} />,
    link: <LinkIcon {...restProps} ref={forwardedRef} />,
    register: <RegisterIcon {...restProps} ref={forwardedRef} />,
    search: <SearchIcon {...restProps} ref={forwardedRef} />,
    share: <ShareIcon {...restProps} ref={forwardedRef} />,
    time: <TimeIcon {...restProps} ref={forwardedRef} />,
    venue: <VenueIcon {...restProps} ref={forwardedRef} />,
  }

  return <>{iconEl[icon]}</>
})

Icon.displayName = 'Icon'

export { Icon, iconNameArray, type IconProps, type IconNameType }
