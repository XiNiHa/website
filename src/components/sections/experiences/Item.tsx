import {
  batch,
  createSignal,
  For,
  onMount,
  Show,
  type Component,
} from 'solid-js'
import SmoothIcon from '@/components/SmoothIcon'
import { Experience } from './experience'

type Props = {
  experience: Experience
  subprojectMap?: Map<string, Experience>
}

const Item: Component<Props> = ({ experience, subprojectMap }) => {
  const [expanded, setExpandedImpl] = createSignal(false)
  const [prevExpanded, setPrevExpanded] = createSignal(expanded())
  const [fixedPartHeight, setFixedPartHeight] = createSignal(0)
  const [contentHeight, setContentHeight] = createSignal(0)
  const [transitionEnded, setTransitionEnded] = createSignal(true)

  let wrapperRef: HTMLElement | undefined = undefined
  let fixedPartRef: HTMLDivElement | undefined = undefined
  let contentRef: HTMLDivElement | undefined = undefined

  const observer = new ResizeObserver(() => {
    batch(() => {
      if (fixedPartRef) setFixedPartHeight(fixedPartRef.clientHeight)
      if (contentRef) setContentHeight(contentRef.clientHeight)
    })
  })
  onMount(() => {
    batch(() => {
      if (fixedPartRef) {
        setFixedPartHeight(fixedPartRef.clientHeight)
        observer.observe(fixedPartRef)
      }
      if (contentRef) {
        setContentHeight(contentRef.clientHeight)
        observer.observe(contentRef)
      }
    })
    wrapperRef?.addEventListener('transitionend', () =>
      setTransitionEnded(true)
    )
  })

  const setExpanded = (...args: Parameters<typeof setExpandedImpl>) => {
    batch(() => {
      setTransitionEnded(false)
      setPrevExpanded(expanded())
      setExpandedImpl(...args)
    })
  }

  const isExpansionRender = () =>
    prevExpanded() !== expanded() && !transitionEnded()

  return (
    <li
      class="flex flex-col gap-1 print:break-inside-avoid-page"
      classList={{
        'xl:gap-2': !experience.stack,
        'my-5': !experience.isSubproject,
      }}
    >
      <div
        class="flex items-center gap-2 cursor-pointer w-fit mb-1 transition-colors duration-300 border-b border-b-transparent hover:border-b-gray-400 sm:flex-nowrap"
        classList={{ 'flex-wrap': !experience.isSubproject }}
        onClick={() => setExpanded(prev => !prev)}
      >
        <h3
          class={`
            relative text-#333 flex flex-wrap items-center gap-2
            ${
              experience.isSubproject
                ? 'text-lg xl:text-xl'
                : 'text-xl xl:text-3xl'
            }
          `}
        >
          <Show
            when={experience.isSubproject}
            fallback={
              <span class="absolute -left-7 -lt-xl:left-4 top-0"> - </span>
            }
          >
            {' '}
            •{' '}
          </Show>
          <For each={experience.title}>
            {seg => (
              <>
                <span class="nw">{seg}</span>{' '}
              </>
            )}
          </For>
          <Show when={experience.pageUrl}>
            <a
              href={experience.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="mx-1 h-fit leading-1 print:hidden"
              onClick={e => e.stopPropagation()}
            >
              <i class="i-bi-house-door-fill w-5 h-5 xl:w-6 xl:h-6 inline-block" />
            </a>
          </Show>
          <Show when={experience.githubUrl}>
            <a
              href={experience.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="mx-1 h-fit flex print:hidden"
              onClick={e => e.stopPropagation()}
            >
              <i class="i-bi-github text-xl xl:text-2xl" />
            </a>
          </Show>
        </h3>
        <div
          class="flex items-center"
          classList={{ 'ml-3': experience.isSubproject }}
        >
          <span class="text-lg xl:text-xl text-#777 whitespace-nowrap">
            {experience.when}
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
      <Show when={experience.stack}>
        <ul class="flex flex-wrap gap-2">
          <For each={experience.stack}>
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
        style={{
          height: (expanded() ? contentHeight() : fixedPartHeight()) + 'px',
        }}
      >
        <div ref={contentRef} class="flex flex-col gap-6">
          <div>
            <p
              ref={fixedPartRef}
              class={
                experience.isSubproject
                  ? 'text-base xl:text-lg'
                  : 'text-lg xl:text-xl'
              }
            >
              <For each={experience.fixedPart}>
                {seg => (
                  <>
                    <span class="nw">{seg}</span>{' '}
                  </>
                )}
              </For>
            </p>
            <Show when={experience.content}>
              <div
                innerHTML={experience.content}
                class={
                  'flex flex-col font-body underline-a ' +
                  (experience.isSubproject
                    ? 'text-base xl:text-lg'
                    : 'text-lg xl:text-xl')
                }
              />
            </Show>
          </div>
          <Show when={experience.subprojects?.length}>
            <ul class="flex flex-col gap-6">
              <For each={experience.subprojects}>
                {projectId => {
                  const project = projectId && subprojectMap?.get(projectId)
                  return (
                    project && (
                      <Item
                        experience={project}
                        subprojectMap={subprojectMap}
                      />
                    )
                  )
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
