import { createEffect, createSignal } from 'solid-js'

export const [hash, setHash] = createSignal(
  (typeof window !== 'undefined' && location.hash) || '#about',
)

createEffect(() => history.replaceState(null, '', hash()))
