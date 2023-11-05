/** components */
import Facilities from '@/modules/investment/components/room-detail/facilities'
import BulletList from '@/modules/investment/components/room-detail/bullet-list'

const RoomDetail = (): JSX.Element => {
  return (
    <div className="lg:flex-1">
      <div className="mb-1 flex items-start justify-between gap-1">
        <div>
          <h2 className="text-2 uppercase">MIRA</h2>
          <div>Koh Phanghan, Thailand</div>
        </div>
        <div className="flex items-center gap-0.75">
          <span className="text-0.875">Status</span>
          <span className="rounded-lg bg-primary px-0.75 py-0.25 text-0.875 uppercase text-base">BUILDING</span>
        </div>
      </div>
      <Facilities bedRooms={1} bathRooms={1} maxGuest="<2" />
      <div className="my-1.5 h-px bg-base" />
      <p className="mb-2 last:mb-0">
        Mira is an ongoing project that offers investors great potential in the beautiful beachfront paradise of Koh
        Phangan. With a prime location in a thriving tourism destination, this project provides a profitable
        income-generating asset. Mira Investments is fully committed to ensuring the success of its investors, offering
        world-class property management and marketing expertise that guarantees high rental yields and long-term
        prosperity for your investment.
      </p>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <BulletList
          title="Amenities"
          list={['Private beach access', 'Private pool', 'Modern interiors', 'Self-check in']}
        />
        <BulletList
          title="Investment highlights"
          list={[
            'Prime beachfront location',
            'Expected high rental yields',
            'Strong tourism growth',
            'Strategic marketing & management',
          ]}
        />
        <BulletList title="Projected returns" list={['Rental income estimates', 'Expected appreciation value']} />
      </div>
    </div>
  )
}

export default RoomDetail
