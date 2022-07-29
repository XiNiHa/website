import { batch, Component, createEffect, createSignal, untrack } from 'solid-js'
import { activeTech } from '@/state/tech'

interface Props {
  explanations: Record<string, string>
}

const Explanation: Component<Props> = ({ explanations }) => {
  const [textA, setTextA] = createSignal('')
  const [textB, setTextB] = createSignal('')
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

  return (
    <div>
      <div
        innerHTML={textA()}
        class={textClasses}
        classList={{
          'opacity-100': activeText() === 'a',
          'opacity-0': activeText() !== 'a',
        }}
      />
      <div
        innerHTML={textB()}
        class={textClasses}
        classList={{
          'opacity-100': activeText() === 'b',
          'opacity-0': activeText() !== 'b',
        }}
      />
    </div>
  )
}

export default Explanation
