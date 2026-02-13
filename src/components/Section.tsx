import {
  type Component,
  type JSX,
  type JSXElement,
  createEffect,
  createSignal,
  splitProps,
} from 'solid-js'
import { createIntersectionObserver } from '@solid-primitives/intersection-observer'
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

const Section: Component<Props> = props => {
  const [locals, attrs] = splitProps(props, ['title', 'children', 'class'])

  const section = (
    <section {...attrs} class={`${locals.class} py-28 print:py-6`}>
      <h2 class="text-3xl pl-4 border-l-4 border-l-gray-600">{locals.title}</h2>
      <div>{locals.children}</div>
    </section>
  ) as HTMLElement

  createIntersectionObserver(
    () => [section],
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
    { rootMargin: '0px 0px -70%' },
  )

  return section
}

export default Section
