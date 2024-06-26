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
    'text-xl leading-[1.8] absolute transition-all duration-500 inset-l-0 -inset-r-2'

  const textAEl = (
    <div
      innerHTML={textA()}
      class={textClasses}
      classList={{
        'z-10': activeText() === 'a',
        'pointer-events-none': activeText() !== 'a',
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
        'z-10': activeText() === 'b',
        'pointer-events-none': activeText() !== 'b',
        'opacity-100': activeText() === 'b',
        'opacity-0': activeText() !== 'b',
      }}
    />
  ) as HTMLElement

  createEffect(() => {
    activeText()
    queueMicrotask(() =>
      setMaxHeight(Math.max(textAEl.clientHeight, textBEl.clientHeight)),
    )
  })

  return (
    <div
      style={{ height: maxHeight() + 'px' }}
      class="transition-all duration-500 relative print:hidden lt-lg:[&_br]:hidden"
    >
      {textAEl}
      {textBEl}
    </div>
  )
}

export default Explanation
