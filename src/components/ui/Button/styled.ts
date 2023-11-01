import { tv } from 'tailwind-variants'
import { twMergeConfig } from '@/libs/utils/tailwind-merge-config'

export const styled = tv(
  {
    base: [
      'group/button flex justify-center items-center w-full h-[3rem] px-1 sm:px-1.5 font-medium text-0.875 gap-1 rounded-full uppercase tracking-[0.13125rem]',
    ],
    variants: {
      bg: {
        base: 'bg-base',
        secondary: 'bg-secondary',
      },
    },
    defaultVariants: {
      bg: 'base',
    },
  },
  {
    twMergeConfig: twMergeConfig,
  },
)
