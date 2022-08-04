import { batch, Component, createEffect, createReaction, createSignal, untrack } from 'solid-js'
import { activeTech } from '@/state/tech'

interface Props {
  explanations: Record<string, string>
}

const Explanation: Component<Props> = ({ explanations }) => {
  const [textA, setTextA] = createSignal('')
  const [textB, setTextB] = createSignal('')
  const [textAHeight, setTextAHeight] = createSignal(0)
  const [textBHeight, setTextBHeight] = createSignal(0)
  const [activeText, setActiveText] = createSignal<'a' | 'b'>('a')

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

  createReaction(() => {
    batch(() => {
      setTextAHeight(textAEl.clientHeight)
      setTextBHeight(textBEl.clientHeight)
    })
  })(() => (textA(), textB()))

  return (
    <div style={{ height: Math.max(textAHeight(), textBHeight()) + 'px' }} class="transition-all duration-500">
      {textAEl}
      {textBEl}
    </div>
  )
}

export default Explanation
