import type { Component } from 'solid-js'
import SmoothIcon from '@/components/SmoothIcon'
import { activeTech, setActiveTech } from '@/state/tech'

interface Props {
  iconUrl: string
  text: string
}

const Chip: Component<Props> = (props) => {
  return (
    <button
      class="flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-#dddddd border font-sans text-xl text-#3 transition-all duration-500 hover:opacity-100"
      classList={{
        'border-#c shadow print:shadow-none': activeTech() === props.text,
        'border-transparent opacity-70 print:border-#c print:opacity-100': activeTech() !== props.text,
      }}
      onClick={() => setActiveTech(props.text)}
    >
      <SmoothIcon
        class="w-22px h-22px"
        iconUrl={props.iconUrl}
        iconAlt={`${props.text} icon`}
      />
      {props.text}
    </button>
  )
}

export default Chip
