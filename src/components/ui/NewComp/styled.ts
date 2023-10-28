import { tv } from 'tailwind-variants'
import { twMergeConfig } from '@/libs/utils/tailwind-merge-config'

export const styled = tv(
  {
    base: '',
    variants: {},
    defaultVariants: {},
  },
  {
    twMergeConfig: twMergeConfig,
  },
)
