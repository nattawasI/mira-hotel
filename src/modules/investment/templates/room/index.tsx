'use client'

/** libs */
import { cln } from '@/libs/utils'

/** components */
import * as Tabs from '@radix-ui/react-tabs'
import RoomSlide from '@/modules/investment/components/room-slide'
import RoomDetail from '@/modules/investment/components/room-detail'

const tabList = [
  {
    value: 'on-going',
    label: 'on going',
  },
  {
    value: 'up-coming',
    label: 'up coming',
  },
]

const Room = (): JSX.Element => {
  return (
    <div className="content-container py-2">
      <Tabs.Root defaultValue={tabList[0].value}>
        <Tabs.List className="mx-auto mb-1.5 grid max-w-[24.688rem] grid-cols-2 rounded-full bg-secondary">
          {tabList.map((item, index) => (
            <div
              key={item.value}
              className={cln(
                'flex flex-1 items-center',
                index === 0 ? 'after:h-[1.375rem] after:w-px after:bg-black after:content-[""]' : '',
              )}
            >
              <Tabs.Trigger
                value={item.value}
                className={cln(
                  'flex h-[3.125rem] w-full items-center justify-center text-center uppercase leading-[0.15rem] -outline-offset-1 focus-visible:outline-white',
                  index === 0 ? 'rounded-l-full' : '',
                  index === tabList.length - 1 ? 'rounded-r-full' : '',
                  'data-[state=active]:font-medium',
                )}
              >
                {item.label}
              </Tabs.Trigger>
            </div>
          ))}
        </Tabs.List>
        <div className="rounded-3xl bg-white p-1 lg:p-1.5">
          <div className="flex flex-col gap-1.5 lg:flex-row lg:items-start">
            {/* <Tabs.Content value="on-going">Content 1</Tabs.Content>
            <Tabs.Content value="up-coming">Content 2</Tabs.Content> */}
            <RoomSlide />
            <RoomDetail />
          </div>
        </div>
      </Tabs.Root>
    </div>
  )
}

export default Room
