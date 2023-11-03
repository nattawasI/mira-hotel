/** components */
import FaqList from '@/modules/investment/components/FaqList'

const Faq = (): JSX.Element => {
  return (
    <div className="content-container pb-2 pt-[4.70rem] lg:pt-[9.38rem]">
      <div className="heading-lead mb-3 lg:mb-[3.5rem]">
        <h2 className="heading-lead__title">FAQ</h2>
        <h3 className="heading-lead__title-large">Addressing common questions</h3>
      </div>
      <FaqList />
    </div>
  )
}

export default Faq
