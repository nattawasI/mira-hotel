/** libs */
import { HTMLAttributes } from 'react'
import { cln } from '@/libs/utils'
import Image from 'next/image'

type WhyInvestCardProps = Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
  srcImage: string
  title?: string
  description?: string
}

const WhyInvestCard = (props: WhyInvestCardProps) => {
  const { srcImage, title, description, className, ...restProps } = props
  return (
    <div
      {...restProps}
      className={cln('relative aspect-square overflow-hidden rounded-xl sm:aspect-video lg:aspect-square', className)}
    >
      <Image src={srcImage} alt={title ?? ''} fill className="object-cover object-center" />
      <div
        className={cln(
          'absolute bottom-0 left-0 w-full overflow-hidden px-1.25 py-1.5 lg:px-2',
          'before:absolute before:inset-0 before:bg-[rgba(15,15,15,0.50)] before:backdrop-blur-sm before:content-[""]',
        )}
      >
        <div className="text-base relative flex flex-col gap-0.5">
          <h4 className="text-1 font-medium lg:text-1.25">{title}</h4>
          <p className="text-0.875 lg:text-1">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WhyInvestCard
