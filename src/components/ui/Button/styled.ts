import { tv } from 'tailwind-variants'
import { twMergeConfig } from '@/libs/utils/tailwind-merge-config'

export const styled = tv(
  {
    base: 'flex justify-center items-center w-full h-[3rem] px-1.5 font-medium text-0.875 gap-1 rounded-full uppercase tracking-[0.13125rem]',
    variants: {
      bg: {
        secondary: 'bg-secondary',
        yellow: 'bg-yellow',
      },
    },
    defaultVariants: {
      bg: 'secondary',
    },
  },
  {
    twMergeConfig: twMergeConfig,
  },
)