import {
  batch,
  Component,
  createEffect,
  createSignal,
  onMount,
  untrack,
} from 'solid-js'
import { activeTech, setActiveTech } from '@/state/tech'

interface Props {
  initialItem: string
  explanations: Record<string, string>
}

const Explanation: Component<Props> = ({ initialItem, explanations }) => {
  const [textA, setTextA] = createSignal('')
  const [textB, setTextB] = createSignal('')
  const [maxHeight, setMaxHeight] = createSignal(0)
  const [activeText, setActiveText] = createSignal<'a' | 'b'>('a')

  onMount(() => setActiveTech(initialItem))

  createEffect(() => {
    const currTech = activeTech()
    untrack(() => {
      if (currTech && currTech in explanations) {
        const currText = activeText()
        if (currText === 'a') {
          batch(() => {
            setTextB(explanations[currTech])
            setActiveText('b')
          })
        } else {
          batch(() => {
            setTextA(explanations[currTech])
            setActiveText('a')
          })
        }
      }
    })
  })

  const textClasses =
    'text-xl leading-[1.8] absolute transition-all duration-500'

  const textAEl = (
    <div
      innerHTML={textA()}
      class={textClasses}
      classList={{
        'opacity-100': activeText() === 'a',
        'opacity-0': activeText() !== 'a',
      }}
    />
  ) as HTMLElement
  const textBEl = (
    <div
      innerHTML={textB()}
      class={textClasses}
      classList={{
        'opacity-100': activeText() === 'b',
        'opacity-0': activeText() !== 'b',
      }}
    />
  ) as HTMLElement

  createEffect(() => {
    activeText()
    setMaxHeight(v => Math.max(v, textAEl.clientHeight, textBEl.clientHeight))
  })

  return (
    <div
      style={{ height: maxHeight() + 'px' }}
      class="transition-all duration-500"
    >
      {textAEl}
      {textBEl}
    </div>
  )
}

export default Explanation
