/** libs */
import { forwardRef } from 'react'
import { cln } from '@/libs/utils'
import * as SelectPrimitive from '@radix-ui/react-select'

type SelectProps = SelectPrimitive.SelectProps & {
  placeholder?: string
  className?: string
}

const SelectRoot = forwardRef<HTMLButtonElement, SelectProps>((props, forwardedRef): JSX.Element => {
  const { placeholder = 'Select', className, children, ...restProps } = props
  return (
    <SelectPrimitive.Root {...restProps}>
      <SelectPrimitive.Trigger
        ref={forwardedRef}
        className={cln(
          'flex h-[3.125rem] items-center justify-between rounded-lg border border-black bg-transparent px-1 text-0.875',
          'focus:border-primary focus:outline-none',
          'data-[placeholder]:text-black-50',
          'data-[state=open]:border-primary',
          className,
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.36245 10.6198L13.6725 5.0468C13.7611 4.95381 13.8105 4.83027 13.8105 4.7018C13.8105 4.57333 13.7611 4.44979 13.6725 4.3568L13.6665 4.3508C13.6235 4.30557 13.5718 4.26955 13.5144 4.24493C13.4571 4.22032 13.3953 4.20763 13.333 4.20763C13.2706 4.20763 13.2088 4.22032 13.1515 4.24493C13.0942 4.26955 13.0424 4.30557 12.9995 4.3508L7.99945 9.5988L3.00145 4.3508C2.95848 4.30557 2.90675 4.26955 2.84942 4.24493C2.79209 4.22032 2.73034 4.20762 2.66795 4.20762C2.60556 4.20762 2.54382 4.22032 2.48648 4.24493C2.42915 4.26955 2.37742 4.30557 2.33445 4.3508L2.32845 4.3568C2.23981 4.44979 2.19035 4.57333 2.19035 4.7018C2.19035 4.83027 2.23981 4.95381 2.32845 5.0468L7.63845 10.6198C7.68515 10.6688 7.74131 10.7078 7.80354 10.7345C7.86576 10.7612 7.93275 10.7749 8.00045 10.7749C8.06815 10.7749 8.13514 10.7612 8.19736 10.7345C8.25959 10.7078 8.31575 10.6688 8.36245 10.6198Z"
            fill="#0F0F0F"
          />
        </svg>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content
        sideOffset={4}
        position="popper"
        className="max-h-200 no-scrollbar w-[var(--radix-select-trigger-width)] overflow-y-auto rounded-lg border border-primary bg-white shadow"
      >
        <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
})

SelectRoot.displayName = 'Select'

type SelectItemProps = SelectPrimitive.SelectItemProps

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>((props, forwardedRef): JSX.Element => {
  const { className, children, ...restProps } = props
  return (
    <SelectPrimitive.Item
      {...restProps}
      ref={forwardedRef}
      className={cln(
        'data-[highlighted]:bg-primary-25 data-[state=checked]:bg-primary-50 data-[state=checked]:data-[highlighted]:bg-primary-50 cursor-pointer p-1 outline-none',
        className,
      )}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
})

SelectItem.displayName = 'Select.Item'

const Select = Object.assign(SelectRoot, {
  Item: SelectItem,
})

export { Select, type SelectProps, type SelectItemProps }
