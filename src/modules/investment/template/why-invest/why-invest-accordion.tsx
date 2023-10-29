'use client'

/** libs */
import * as Accordion from '@radix-ui/react-accordion'

/** components */
import WhyInvestButton from '@/modules/investment/components/why-invest-button'
import WhyInvestCard from '@/modules/investment/components/why-invest-card'

/** types */
import { WhyInvestType } from '@/modules/investment/template/why-invest'

type WhyInvestAccordionProps = {
  data: WhyInvestType[]
}

const WhyInvestAccordion = (props: WhyInvestAccordionProps): JSX.Element => {
  const { data } = props

  return (
    <>
      <h2 className="title-uppercase mb-1 text-secondary">Why Invest with Mira?</h2>
      <Accordion.Root type="single" defaultValue={data[0].id} collapsible>
        {data.map((item) => (
          <Accordion.Item key={item.id} className="border-t border-secondary first:border-0" value={item.id}>
            <Accordion.Header>
              <Accordion.Trigger asChild>
                <WhyInvestButton className="data-[state=open]:text-yellow group data-[state=open]:font-medium">
                  {item.title}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="30"
                    viewBox="0 0 29 30"
                    fill="none"
                    className="rotate-180 transition-transform duration-300 group-data-[state=open]:rotate-0"
                  >
                    <path
                      d="M13.8434 10.2512L4.21905 20.3523C4.05838 20.5208 3.96875 20.7448 3.96875 20.9776C3.96875 21.2105 4.05838 21.4344 4.21905 21.6029L4.22992 21.6138C4.30781 21.6958 4.40157 21.7611 4.50548 21.8057C4.6094 21.8503 4.7213 21.8733 4.83439 21.8733C4.94748 21.8733 5.05938 21.8503 5.1633 21.8057C5.26722 21.7611 5.36097 21.6958 5.43886 21.6138L14.5014 12.1018L23.5602 21.6138C23.6381 21.6958 23.7319 21.7611 23.8358 21.8057C23.9397 21.8503 24.0516 21.8733 24.1647 21.8733C24.2778 21.8733 24.3897 21.8503 24.4936 21.8057C24.5975 21.7611 24.6913 21.6958 24.7692 21.6138L24.78 21.6029C24.9407 21.4344 25.0303 21.2105 25.0303 20.9776C25.0303 20.7448 24.9407 20.5208 24.78 20.3523L15.1557 10.2512C15.071 10.1624 14.9692 10.0917 14.8565 10.0434C14.7437 9.99504 14.6222 9.97012 14.4995 9.97012C14.3768 9.97012 14.2554 9.99504 14.1426 10.0434C14.0299 10.0917 13.9281 10.1624 13.8434 10.2512Z"
                      fill="currentColor"
                    />
                  </svg>
                </WhyInvestButton>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
              <div className="py-0.5">
                <WhyInvestCard srcImage={item.srcImage} title={item.title} description={item.description} />
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  )
}

export default WhyInvestAccordion
