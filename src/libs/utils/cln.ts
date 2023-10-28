import { clsx, ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'
import { twMergeConfig } from '@/libs/utils/tailwind-merge-config'

const customTwMerge = extendTailwindMerge(twMergeConfig)

export const cln = (...classes: ClassValue[]): string => customTwMerge(clsx(classes))
