/** libs */
import { HTMLAttributes } from 'react'

type BulletListProps = Omit<HTMLAttributes<HTMLDivElement>, 'title' | 'children'> & {
  title?: string
  list: string[]
}

const BulletList = (props: BulletListProps): JSX.Element => {
  const { title, list, ...restProps } = props
  return (
    <div {...restProps}>
      <div className="mb-0.5 font-medium capitalize">{title}</div>
      <ul className="list-inside list-disc pl-0.75">
        {list.map((item, index) => (
          <li key={index} className="capitalize">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BulletList
