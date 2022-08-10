import {
  Component,
  createEffect,
  createSignal,
  JSXElement,
  onMount,
} from 'solid-js'
import { hash as globalHash, setHash } from '@/state/location'

interface Props {
  hash: string
  children: JSXElement
}

const Location: Component<Props> = ({ hash, children }) => {
  const [active, setActive] = createSignal(false)

  onMount(() => {
    createEffect(() => setActive(globalHash() === hash))
    const anchor = document.querySelector(
      `a[href="${hash}"]`
    ) as HTMLElement | null
    anchor?.addEventListener('click', e => {
      e.preventDefault()
      const href = anchor?.getAttribute('href')
      if (href) {
        const target = href && document.querySelector(href)
        if (target)
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setHash(href)
      }
    })
  })

  return (
    <div class="relative">
      <div class="absolute inset-0 pointer-events-none flex items-center overflow-hidden">
        <div
          class="i-bi-chevron-right transition-transform duration-500 print:hidden"
          classList={{ '-translate-x-full': !active() }}
        />
      </div>
      {children}
    </div>
  )
}

export default Location
