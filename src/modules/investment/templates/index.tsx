/** components */
import Hero from '@/modules/investment/templates/hero'
import UnlockingProsperity from '@/modules/investment/templates/unlocking-prosperity'
import ParallaxSection from '@/modules/investment/templates/parallax-section'
import Room from '@/modules/investment/templates/room'
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
      <ParallaxSection />
      <Room />
      <WhyInvest />
      <YourPathToSuccess />
      <CustomizeYourInvestment />
      <Contact />
      <Faq />
    </>
  )
}

export default InvestmentTemplate
