import {
  Component,
  createEffect,
  createSignal,
  JSX,
  JSXElement,
} from 'solid-js'
import { makeIntersectionObserver } from '@solid-primitives/intersection-observer'
import { setHash } from '@/state/location'

interface Props extends JSX.HTMLAttributes<HTMLElement> {
  id: string
  title: string
  children: JSXElement
}

const [visibleSections, setVisibleSections] = createSignal<string[]>([])

createEffect(() => {
  const last = visibleSections().at(-1)
  if (last) setHash(last)
})

const Section: Component<Props> = ({
  title,
  children,
  class: cls,
  ...attrs
}) => {
  const section = (
    <section {...attrs} class={cls + ' py-28 flex flex-col'}>
      <h2 class="text-3xl pl-4 border-l-4 border-l-gray-600">{title}</h2>
      <div class="flex-1">{children}</div>
    </section>
  ) as HTMLElement

  const {} = makeIntersectionObserver(
    [section],
    ([entry]) => {
      if (entry.target.id) {
        const hash = `#${entry.target.id}`
        if (entry.isIntersecting) {
          setVisibleSections(prev => [...prev, hash])
        } else {
          setVisibleSections(prev => prev.filter(s => s !== hash))
        }
      }
    },
    { rootMargin: '0px 0px -80%' }
  )

  return section
}

export default Section
