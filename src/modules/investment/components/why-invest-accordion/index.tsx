'use client'

/** libs */
import * as Accordion from '@radix-ui/react-accordion'

/** components */
import WhyInvestButton from '@/modules/investment/components/why-invest-button'
import WhyInvestCard from '@/modules/investment/components/why-invest-card'

const WhyInvestAccordion = (): JSX.Element => {
  return (
    <Accordion.Root type="single" defaultValue="item-1" collapsible>
      <Accordion.Item className="border-t border-secondary first:border-0" value="item-1">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <WhyInvestButton className="data-[state=open]:font-medium">Global Potential</WhyInvestButton>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <div className="py-0.5">
            <WhyInvestCard
              srcImage="/investment/why-invest.jpg"
              title="Global Potential"
              description="Join a global network of investors who share a collective vision."
            />
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="border-t border-secondary first:border-0" value="item-2">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <WhyInvestButton className="data-[state=open]:font-medium">Strategic Locations</WhyInvestButton>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <div className="py-0.5">
            <WhyInvestCard
              srcImage="/investment/why-invest.jpg"
              title="Global Potential"
              description="Join a global network of investors who share a collective vision."
            />
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="border-t border-secondary first:border-0" value="item-3">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <WhyInvestButton className="data-[state=open]:font-medium">Tech-Enhanced Returns</WhyInvestButton>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <div className="py-0.5">
            <WhyInvestCard
              srcImage="/investment/why-invest.jpg"
              title="Global Potential"
              description="Join a global network of investors who share a collective vision."
            />
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="border-t border-secondary first:border-0" value="item-4">
        <Accordion.Header>
          <Accordion.Trigger asChild>
            <WhyInvestButton className="data-[state=open]:font-medium">Sustainable Growth</WhyInvestButton>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
          <div className="py-0.5">
            <WhyInvestCard
              srcImage="/investment/why-invest.jpg"
              title="Global Potential"
              description="Join a global network of investors who share a collective vision."
            />
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export default WhyInvestAccordion
