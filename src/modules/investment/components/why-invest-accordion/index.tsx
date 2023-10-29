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

const WhyInvestAccordion = ({ data }: WhyInvestAccordionProps): JSX.Element => {
  return (
    <Accordion.Root type="single" defaultValue={data[0].id} collapsible>
      {data.map((item) => (
        <Accordion.Item key={item.id} className="border-t border-secondary first:border-0" value={item.id}>
          <Accordion.Header>
            <Accordion.Trigger asChild>
              <WhyInvestButton className="data-[state=open]:font-medium">{item.title}</WhyInvestButton>
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
  )
}

export default WhyInvestAccordion
