import { cln } from '@/libs/utils'

type IconItemProps = {
  children: React.ReactNode
}

const IconItem = ({ children }: IconItemProps): JSX.Element => {
  return <div className={cln()}>{children}</div>
}

export { IconItem }
