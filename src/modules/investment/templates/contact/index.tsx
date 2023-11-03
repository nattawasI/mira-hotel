/** components */
import ContactForm from '@/modules/investment/components/contact-form'

const Contact = (): JSX.Element => {
  return (
    <div className="pb-2 pt-[4.70rem] lg:pt-[9.38rem]">
      <div className="content-container heading-lead mb-3 lg:mb-[3.5rem]">
        <h2 className="heading-lead__title">Contact Mira</h2>
        <h3 className="heading-lead__title-large">Request investment details</h3>
      </div>
      <ContactForm />
    </div>
  )
}

export default Contact
