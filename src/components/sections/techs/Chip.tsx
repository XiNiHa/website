import { Component } from 'solid-js'
import SmoothIcon from '@/components/SmoothIcon'
import { activeTech, setActiveTech } from '@/state/tech'

interface Props {
  iconUrl: string
  text: string
}

const Chip: Component<Props> = ({ iconUrl, text }) => {
  return (
    <button
      class="flex items-center gap-2 h-10 px-4 py-2 rounded-full bg-#d2d2d2 border font-sans text-xl text-#3 transition-all duration-500 hover:opacity-100"
      classList={{
        'border-#c shadow': activeTech() === text,
        'border-transparent opacity-70': activeTech() !== text,
      }}
      onClick={() => setActiveTech(text)}
    >
      <SmoothIcon
        class="w-22px h-22px"
        iconUrl={iconUrl}
        iconAlt={`${text} icon`}
      />
      {text}
    </button>
  )
}

export default Chip
