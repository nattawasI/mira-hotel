/** libs */
import { cln } from '@/libs/utils'

/** components */
import YourPathCard from '@/modules/investment/components/your-path-card'

const dataList = [
  {
    id: 'discover',
    title: '1. Discover',
    description: 'Explore Mira’s investment concept and the available opportunities.',
    srcImage: '/investment/discover.jpg',
  },
  {
    id: 'evaluate',
    title: '2. Evaluate',
    description: 'Dive deeper into the specifics and quantify the potential.',
    srcImage: '/investment/evaluate.jpg',
  },
  {
    id: 'invest',
    title: '3. Invest',
    description: 'Take the leap and become a valued part of the global investment community.',
    srcImage: '/investment/invest.jpg',
  },
  {
    id: 'thrive',
    title: '4. Thrive',
    description: 'Witness your investments flourish and be an integral part of the Mira success story.',
    srcImage: '/investment/thrive.jpg',
  },
]

const YourPathList = (): JSX.Element => {
  return (
    <div className="content-container no-scrollbar overflow-x-auto">
      <div className="flex gap-x-1 lg:gap-x-2">
        {dataList.map((item, index) => (
          <div className={cln('flex-shrink-0', index === dataList.length - 1 ? 'pr-1.25' : '')} key={item.id}>
            <YourPathCard
              srcImage={item.srcImage}
              title={item.title}
              description={item.description}
              className="h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default YourPathList
