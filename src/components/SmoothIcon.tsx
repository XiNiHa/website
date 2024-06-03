import { Component, createSignal, onMount } from 'solid-js'

interface Props {
  iconUrl: string
  iconAlt: string
  class?: string
  iconClassName?: string
}

const SmoothIcon: Component<Props> = ({
  iconUrl,
  iconAlt,
  class: cls,
  iconClassName,
}) => {
  const [visible, setVisible] = createSignal(false)

  onMount(() => {
    const image = new Image()
    image.addEventListener('load', () => setVisible(true))
    image.src ||= iconUrl
  })

  return (
    <span class={cls}>
      <img
        src={visible() ? iconUrl : undefined}
        alt={iconAlt}
        class={'h-full transition-opacity duration-500 ' + iconClassName}
        classList={{
          'opacity-0': !visible(),
          'opacity-100': visible(),
        }}
      />
    </span>
  )
}

export default SmoothIcon
