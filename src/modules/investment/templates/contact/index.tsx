/** libs */
import { Button } from '@/components/ui/Button'

const Contact = (): JSX.Element => {
  return (
    <div className="pb-2 pt-[4.70rem] lg:pt-[9.38rem]">
      <div className="content-container heading-lead mb-3 lg:mb-[3.5rem]">
        <h2 className="heading-lead__title">Contact Mira</h2>
        <h3 className="heading-lead__title-large">Request investment details</h3>
      </div>
      <div className="mx-auto w-full max-w-[35rem] bg-white p-1.25 sm:rounded-xl sm:p-[3rem]">
        <form className="gap-y1.5 flex flex-col">
          <div className="grid grid-cols-2"></div>
          <div className="grid grid-cols-2"></div>
          <div className="grid grid-cols-2"></div>
          <div className="grid grid-cols-2"></div>
          <Button type="submit" icon="arrow-right" bg="secondary">
            REQUEST INVESTMENT DETAILS
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
