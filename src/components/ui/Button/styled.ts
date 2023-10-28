import { tv } from 'tailwind-variants'
import { twMergeConfig } from '@/libs/utils/tailwind-merge-config'

export const styled = tv(
  {
    base: [
      'inline-flex justify-center items-center gap-0.5 h-2.75 px-1 border rounded font-500 text-1 outline-offset-2',
      'transition-colors duration-150',
    ],
    variants: {
      variant: {
        solid: ['bg-primary border-primary text-white', 'hover:bg-highlight1 hover:border-highlight1'],
        outline: ['bg-transparent border-black text-black', 'hover:bg-primary hover:border-primary hover:text-white'],
      },
      isResponsive: {
        true: 'md:h-3.75 md:px-1.5 md:text-1.125',
      },
      hasIcon: {
        true: ['justify-between', 'after:content-[""] after:w-[0.875rem]'],
      },
    },
    defaultVariants: {
      variant: 'solid',
      isResponsive: false,
      hasIcon: false,
    },
  },
  {
    twMergeConfig: twMergeConfig,
  },
)
