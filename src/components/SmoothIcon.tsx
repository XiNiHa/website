import { type Component, createSignal, onMount } from 'solid-js'

interface Props {
  iconUrl: string
  iconAlt: string
  class?: string
  iconClassName?: string
}

const SmoothIcon: Component<Props> = props => {
  const [visible, setVisible] = createSignal(false)

  onMount(() => {
    const image = new Image()
    image.addEventListener('load', () => setVisible(true))
    image.src ||= props.iconUrl
  })

  return (
    <span class={props.class}>
      <img
        src={visible() ? props.iconUrl : undefined}
        alt={props.iconAlt}
        class={'h-full transition-opacity duration-500 ' + props.iconClassName}
        classList={{
          'opacity-0': !visible(),
          'opacity-100': visible(),
        }}
      />
    </span>
  )
}

export default SmoothIcon
