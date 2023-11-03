'use client'

/** libs */
import Link from 'next/link'
import { NumericFormat } from 'react-number-format'

/** components */
import { Input } from '@/components/ui/Input'
import { Slider } from '@/components/ui/Slider'

const HowMuchYouInvest = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-white p-2">
      <div>
        <div className="mb-1 flex flex-wrap items-end justify-between gap-0.5">
          <span className="text-1.375 font-medium lg:text-1.25">How much you invest</span>
          <span className="text-0.875">($10,000 minimum)</span>
        </div>
        <NumericFormat
          className="mb-2"
          customInput={Input}
          allowNegative={false}
          thousandSeparator=","
          decimalScale={2}
          prefix={'$'}
        />
        <div className="text-1.25 font-medium">Time horizon</div>
        <Slider className="mb-2" />
        <div className="grid grid-cols-1 max-sm:gap-1.5 sm:grid-cols-2">
          <div>
            <div className="text-1 font-medium">Equity</div>
            <div className="sm:text-2.25 text-2 font-medium">$68,820</div>
            <div className="text-0.875">4% appreciation/year.</div>
          </div>
          <div>
            <div className="text-1 font-medium">Passive income</div>
            <div className="sm:text-2.25 text-2 font-medium">$105,197</div>
            <div className="text-0.875">Total</div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex justify-end">
        <Link href="/" className="underline transition-colors duration-150 hover:text-primary">
          Legal disclaimer
        </Link>
      </div>
    </div>
  )
}

export default HowMuchYouInvest
