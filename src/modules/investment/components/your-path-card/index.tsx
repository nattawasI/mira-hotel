/** libs */
import { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'
import Image from 'next/image'

type YourPathCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  srcImage: string
  title: string
  description: string
}

const YourPathCard = forwardRef<HTMLDivElement, YourPathCardProps>((props, forwardRef): JSX.Element => {
  const { srcImage, title, description, className, ...restProps } = props
  return (
    <div
      {...restProps}
      ref={forwardRef}
      className={cln('flex w-[17.25rem] flex-col overflow-hidden rounded-xl', className)}
    >
      <div className="relative aspect-square">
        <Image src={srcImage} alt={title} fill className="object-cover object-center" />
      </div>
      <div className="flex-1 bg-secondary px-1 py-1.5">
        <h4 className="mb-0.5 text-1.25 font-medium">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
})

YourPathCard.displayName = 'YourPathCard'

export default YourPathCard
