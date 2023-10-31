'use client'

import * as Accordion from '@radix-ui/react-accordion'

type FaqType = {
  id: string
  question: string
  answer: string
}

const faqList: FaqType[] = [
  {
    id: '1',
    question: 'How can I get started with Mira Investments?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '2',
    question: 'What are the expected returns on my investment?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '3',
    question: 'Is my investment safe with Mira?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: '4',
    question: 'How can I reach out to the Mira team for further inquiries?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

const Faq = (): JSX.Element => {
  return (
    <div className="content-container pb-2 pt-[4.70rem] lg:pt-[9.38rem]">
      <div className="mb-3 flex flex-col items-center gap-y-0.5 lg:mb-[3.5rem]">
        <h2 className="title-uppercase">FAQ</h2>
        <h3 className="title-large">Addressing common questions</h3>
      </div>
      <Accordion.Root type="multiple">
        {faqList.map((item, index) => (
          <Accordion.Item
            className={index > 0 ? 'border-t border-black first:border-0' : ''}
            key={item.id}
            value={item.id}
          >
            <Accordion.Header>
              <Accordion.Trigger className="text-1.2 group/faq-header flex w-full justify-between gap-x-0.75 overflow-hidden py-1 text-left lg:text-2">
                <span>{item.question}</span>
                <span className="h-1.5 w-1.5 flex-shrink-0 transition-transform duration-300 group-data-[state=open]/faq-header:rotate-180 lg:h-[2.625rem] lg:w-[2.625rem]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="43"
                    viewBox="0 0 42 43"
                    fill="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M21.9502 28.3775L35.889 13.7484C36.1217 13.5043 36.2515 13.18 36.2515 12.8428C36.2515 12.5055 36.1217 12.1812 35.889 11.9372L35.8732 11.9214C35.7604 11.8027 35.6246 11.7081 35.4741 11.6435C35.3236 11.5789 35.1616 11.5456 34.9978 11.5456C34.834 11.5456 34.6719 11.5789 34.5214 11.6435C34.3709 11.7081 34.2351 11.8027 34.1223 11.9214L20.9973 25.6974L7.87759 11.9214C7.76478 11.8027 7.629 11.7081 7.4785 11.6435C7.328 11.5789 7.16593 11.5456 7.00215 11.5456C6.83837 11.5456 6.6763 11.5789 6.5258 11.6435C6.3753 11.7081 6.23951 11.8027 6.12671 11.9214L6.11096 11.9372C5.87827 12.1812 5.74846 12.5055 5.74846 12.8428C5.74846 13.18 5.87827 13.5043 6.11096 13.7484L20.0497 28.3775C20.1723 28.5062 20.3197 28.6086 20.4831 28.6786C20.6464 28.7486 20.8223 28.7847 21 28.7847C21.1777 28.7847 21.3535 28.7486 21.5169 28.6786C21.6802 28.6086 21.8276 28.5062 21.9502 28.3775Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
              <div className="py-1">
                <p>{item.answer}</p>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  )
}

export default Faq
