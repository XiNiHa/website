import type { CollectionEntry } from 'astro:content'
import {
  batch,
  createEffect,
  createMemo,
  createSignal,
  For,
  onMount,
  Show,
  type Component,
} from 'solid-js'
import { createWithPrevious } from '@/common/createWithPrevious'

type Props = {
  experience: CollectionEntry<'experiences'>
  isSubproject?: boolean
  subprojectMap?: Map<string, CollectionEntry<'experiences'>>
}

const Item: Component<Props> = props => {
  const [expanded, prevExpanded, setExpanded] = createWithPrevious(false)
  const [fixedPartHeight, setFixedPartHeight] = createSignal(0)
  const [contentHeight, setContentHeight] = createSignal(0)
  const [transitionEnded, setTransitionEnded] = createSignal(true)

  let wrapperRef = undefined as HTMLDivElement | undefined
  let fixedPartRef = undefined as HTMLDivElement | undefined
  let contentRef = undefined as HTMLDivElement | undefined

  createEffect(() => {
    const _ = expanded()
    setTransitionEnded(false)
  })

  const updateHeights = () => {
    batch(() => {
      if (fixedPartRef) setFixedPartHeight(fixedPartRef.clientHeight)
      if (contentRef) setContentHeight(contentRef.clientHeight)
    })
  }

  onMount(() => {
    const observer = new ResizeObserver(updateHeights)
    if (fixedPartRef) observer.observe(fixedPartRef)
    if (contentRef) observer.observe(contentRef)

    updateHeights()
    wrapperRef?.addEventListener('transitionend', () =>
      setTransitionEnded(true),
    )
  })

  const isExpansionRender = createMemo(
    () => prevExpanded() !== expanded() && !transitionEnded(),
  )
  const wrapperHeight = createMemo(() =>
    expanded() ? contentHeight() : fixedPartHeight(),
  )

  return (
    <li
      class="flex flex-col gap-1 print:break-inside-avoid-page"
      classList={{
        'xl:gap-2': !props.experience.data.stack,
        'my-5': !props.isSubproject,
      }}
    >
      <div
        class="flex items-center gap-2 cursor-pointer w-fit mb-1 transition-colors duration-300 border-b border-b-transparent hover:border-b-gray-400 sm:flex-nowrap"
        classList={{ 'flex-wrap': !props.isSubproject }}
        onClick={() => setExpanded(prev => !prev)}
      >
        <h3
          class={`
            relative text-#333 flex flex-wrap items-center gap-2
            ${props.isSubproject ? 'text-lg xl:text-xl' : 'text-xl xl:text-3xl'}
          `}
        >
          <Show
            when={props.isSubproject}
            fallback={
              <span class="absolute -left-7 -lt-xl:left-4 top-0"> - </span>
            }
          >
            •
          </Show>
          <For each={props.experience.data.title}>
            {seg => (
              <>
                <span class="nw">{seg}</span>{' '}
              </>
            )}
          </For>
          <Show when={props.experience.data.pageUrl}>
            <a
              href={props.experience.data.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="mx-1 h-fit leading-1 print:hidden"
              onClick={e => e.stopPropagation()}
            >
              <i class="i-bi-house-door-fill w-5 h-5 xl:w-6 xl:h-6 inline-block" />
            </a>
          </Show>
          <Show when={props.experience.data.githubUrl}>
            <a
              href={props.experience.data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="mx-1 h-fit flex print:hidden"
              onClick={e => e.stopPropagation()}
            >
              <i class="i-bi-github text-xl xl:text-2xl" />
            </a>
          </Show>
        </h3>
        <div class="flex items-center">
          <span class="text-lg xl:text-xl text-#777 whitespace-nowrap">
            {props.experience.data.when}
          </span>
          <i
            class="i-bi-chevron-right mx-2 transition-transform duration-500 print:hidden"
            classList={{
              'rotate-90': expanded(),
              'rotate-0': !expanded(),
            }}
          />
        </div>
      </div>
      <Show when={props.experience.data.stack}>
        <ul class="flex flex-wrap gap-2 mb-1">
          <For each={props.experience.data.stack}>
            {stack => (
              <li class="rounded-full h-5 xl:h-6 bg-#ddd px-3 text-sm xl:text-base text-#555">
                {stack}
              </li>
            )}
          </For>
        </ul>
      </Show>
      <div
        ref={wrapperRef}
        class="overflow-hidden print:overflow-visible !print:h-auto"
        classList={{
          'transition-all': isExpansionRender(),
          'duration-500': isExpansionRender(),
        }}
        style={{ height: wrapperHeight() + 'px' }}
      >
        <div ref={contentRef} class="flex flex-col gap-6 lt-lg:[&_br]:hidden">
          <div>
            <p
              ref={fixedPartRef}
              class={
                props.isSubproject
                  ? 'text-base xl:text-lg'
                  : 'text-lg xl:text-xl'
              }
            >
              <For each={props.experience.data.fixedPart}>
                {seg => (
                  <>
                    <span class="nw">{seg}</span>{' '}
                  </>
                )}
              </For>
            </p>
            <Show when={props.experience.rendered}>
              {rendered => (
                <div
                  innerHTML={rendered().html}
                  class={
                    'flex flex-col font-body underline-a ' +
                    (props.isSubproject
                      ? 'text-base xl:text-lg'
                      : 'text-lg xl:text-xl')
                  }
                />
              )}
            </Show>
          </div>
          <Show when={props.experience.data.subprojects?.length}>
            <ul class="flex flex-col gap-6">
              <For each={props.experience.data.subprojects}>
                {projectId => {
                  const project = props.subprojectMap?.get(projectId)
                  return project && <Item experience={project} isSubproject />
                }}
              </For>
            </ul>
          </Show>
        </div>
      </div>
    </li>
  )
}

export default Item
