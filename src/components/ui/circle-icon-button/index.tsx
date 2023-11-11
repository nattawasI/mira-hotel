/** libs */
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cln } from '@/libs/utils'

type CircleIconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  icon: 'prev' | 'next' | 'close'
}

const CircleIconButton = forwardRef<HTMLButtonElement, CircleIconButtonProps>((props, forwardedRef): JSX.Element => {
  const { icon, type = 'button', className, ...restProps } = props

  const iconEl: Record<CircleIconButtonProps['icon'], JSX.Element> = {
    close: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M11.9997 10.586L17.2427 5.34299C17.6332 4.95252 18.2663 4.95252 18.6567 5.34299C19.0472 5.73345 19.0472 6.36652 18.6567 6.75699L13.4137 12L18.6567 17.243C19.0472 17.6335 19.0472 18.2665 18.6567 18.657C18.2663 19.0475 17.6332 19.0475 17.2427 18.657L11.9997 13.414L6.75674 18.657C6.36628 19.0475 5.73321 19.0475 5.34274 18.657C4.95228 18.2665 4.95228 17.6335 5.34274 17.243L10.5857 12L5.34274 6.75699C4.95228 6.36652 4.95228 5.73345 5.34274 5.34299C5.73321 4.95252 6.36628 4.95252 6.75674 5.34299L11.9997 10.586Z"
          fill="#E9E3DC"
        />
      </svg>
    ),
    next: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M14.5358 12L9.29285 6.72124C8.90238 6.32748 8.90238 5.68907 9.29285 5.29532C9.68331 4.90156 10.3164 4.90156 10.7068 5.29532L16.6567 11.2869C17.0473 11.6807 17.0473 12.3193 16.6567 12.7131L10.7068 18.7047C10.3164 19.0984 9.68331 19.0984 9.29285 18.7047C8.90238 18.3109 8.90238 17.6725 9.29285 17.2788L14.5358 12Z"
          fill="#E9E3DC"
        />
      </svg>
    ),
    prev: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.41379 12L14.6568 17.2788C15.0473 17.6725 15.0473 18.3109 14.6568 18.7047C14.2663 19.0984 13.6333 19.0984 13.2428 18.7047L7.29289 12.7131C6.90237 12.3192 6.90237 11.6807 7.29289 11.2869L13.2428 5.29532C13.6333 4.90156 14.2663 4.90156 14.6568 5.29532C15.0473 5.68907 15.0473 6.32748 14.6568 6.72124L9.41379 12Z"
          fill="#E9E3DC"
        />
      </svg>
    ),
  }
  return (
    <button
      {...restProps}
      ref={forwardedRef}
      type={type}
      className={cln('flex h-2.5 w-2.5 items-center justify-center rounded-full bg-black-70', className)}
    >
      {iconEl[icon]}
    </button>
  )
})

CircleIconButton.displayName = 'CircleIconButton'

export { CircleIconButton, type CircleIconButtonProps }
