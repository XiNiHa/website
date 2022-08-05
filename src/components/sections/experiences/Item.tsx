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
      class={'flex flex-col ' + (experience.stack ? 'gap-1' : 'gap-1 md:gap-2')}
    >
      <div
        class="flex items-center gap-2 cursor-pointer w-fit mb-1 transition-colors duration-300 border-b border-b-transparent hover:border-b-gray-400 sm:flex-nowrap"
        classList={{ 'flex-wrap': !experience.isSubproject }}
        onClick={() => setExpanded(prev => !prev)}
      >
        <h3
          class={`
            text-#333 flex flex-wrap items-center gap-2
            ${
              experience.isSubproject
                ? 'text-lg md:text-xl'
                : 'text-xl md:text-3xl'
            }
          `}
        >
          {experience.isSubproject ? ' • ' : ' - '}
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
              class="mx-1 h-fit leading-1"
              onClick={e => e.stopPropagation()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-house-door-fill w-5 h-5 md:w-6 md:h-6 inline-block"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>
            </a>
          </Show>
          <Show when={experience.githubUrl}>
            <a
              href={experience.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="mx-1 h-fit flex"
              onClick={e => e.stopPropagation()}
            >
              <SmoothIcon
                iconUrl="https://cdn.svgporn.com/logos/github-icon.svg"
                iconAlt="Github Icon"
                class="w-5 md:w-6 inline-block"
              />
            </a>
          </Show>
        </h3>
        <div
          class="flex items-center"
          classList={{ 'ml-3': experience.isSubproject }}
        >
          <span class="text-lg md:text-xl text-#777 whitespace-nowrap">
            {experience.when}
          </span>
          <img
            src="https://raw.githubusercontent.com/twbs/icons/main/icons/chevron-right.svg"
            class="p-1.5 transition-transform duration-500"
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
              <li class="rounded-full h-5 md:h-6 bg-#ddd px-3 text-sm md:text-base text-#555">
                {stack}
              </li>
            )}
          </For>
        </ul>
      </Show>
      <div
        ref={wrapperRef}
        class="overflow-hidden"
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
                  ? 'text-base md:text-lg'
                  : 'text-lg md:text-xl'
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
                    ? 'text-base md:text-lg'
                    : 'text-lg md:text-xl')
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
