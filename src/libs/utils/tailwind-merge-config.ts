import { Config } from 'tailwind-merge'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

const colors = Object.keys(fullConfig.theme?.colors ?? [])
const fontSizes = Object.keys(fullConfig.theme?.fontSize ?? [])
const fontWeights = Object.keys(fullConfig.theme?.fontWeight ?? [])

export const twMergeConfig: Partial<Config> = {
  theme: {
    colors: colors,
    borderColors: colors,
    fontSizes: fontSizes /** custom key */,
    fontWeights: fontWeights /** custom key */,
  },
  classGroups: {
    text: [{ text: fontSizes }],
    font: [{ font: fontWeights }],
  },
}
