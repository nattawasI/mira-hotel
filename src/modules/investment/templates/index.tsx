/** components */
import Hero from '@/modules/investment/templates/hero'
import UnlockingProsperity from '@/modules/investment/templates/unlocking-prosperity'
import WhyInvest from '@/modules/investment/templates/why-invest'
import YourPathToSuccess from '@/modules/investment/templates/your-path-to-success'
import CustomizeYourInvestment from '@/modules/investment/templates/customize-your-investment'
import Contact from '@/modules/investment/templates/contact'
import Faq from '@/modules/investment/templates/faq'

const InvestmentTemplate = () => {
  return (
    <>
      <Hero />
      <UnlockingProsperity />
      <WhyInvest />
      <YourPathToSuccess />
      <CustomizeYourInvestment />
      <Contact />
      <Faq />
    </>
  )
}

export default InvestmentTemplate
