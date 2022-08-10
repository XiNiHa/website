import { createEffect, createSignal } from 'solid-js'

export const createWithPrevious = <T>(
  ...initial: Parameters<typeof createSignal<T>>
) => {
  const [value, setValue] = createSignal<T>(...initial)
  const [prev, setPrev] = createSignal<T | null>(null)

  createEffect((prev: T) => {
    const curr = value()
    setPrev(() => prev)
    return curr
  }, value())

  return [value, prev, setValue] as const
}
