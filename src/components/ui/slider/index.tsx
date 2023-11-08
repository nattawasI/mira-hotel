/** libs */
import { HTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'

type SliderProps = SliderPrimitive.SliderProps

const Slider = forwardRef<HTMLDivElement, SliderProps>((props, forwardedRef): JSX.Element => {
  const { className, ...restProps } = props

  return (
    <SliderPrimitive.Root
      {...restProps}
      ref={forwardedRef}
      className={cln('relative flex h-[1.125rem] w-full cursor-pointer touch-none select-none items-center', className)}
    >
      <SliderPrimitive.Track className="bg-black-25 relative h-[0.375rem] grow rounded-full">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-black" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="focus:shadow-black-25 block h-[1.125rem] w-[1.125rem] cursor-pointer rounded-full bg-black outline-offset-0 transition-shadow duration-150 focus:shadow-[0_0_0_5px] focus:outline-none" />
    </SliderPrimitive.Root>
  )
})

Slider.displayName = 'Slider'

export { Slider, type SliderProps }
