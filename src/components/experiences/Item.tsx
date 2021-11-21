import * as React from 'react'
import { usePrevious } from 'react-use'
import { Experience } from '../../pages/experiences'

type Props = {
  experience: Experience
  subprojectMap: Map<string, Experience>
}

const Item: React.FC<Props> = ({ experience, subprojectMap }) => {
  const [expanded, setExpanded] = React.useState(false)
  const prevExpanded = usePrevious(expanded)
  const [fixedPartHeight, setFixedPartHeight] = React.useState(0)
  const [contentHeight, setContentHeight] = React.useState(0)
  const fixedPartRef = React.useRef<HTMLDivElement>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const observer = React.useRef<ResizeObserver | null>(null)

  const isExpansionRender = prevExpanded !== expanded

  React.useEffect(() => {
    observer.current = new ResizeObserver(() => {
      if (fixedPartRef.current) {
        setFixedPartHeight(fixedPartRef.current.clientHeight)
      }
      if (contentRef.current) {
        setContentHeight(contentRef.current.clientHeight)
      }
    })
  }, [])

  React.useEffect(() => {
    if (fixedPartRef.current) {
      const node = fixedPartRef.current
      observer.current?.observe(node)
      setFixedPartHeight(node.clientHeight)

      return () => observer.current?.unobserve(node)
    }
  }, [fixedPartRef.current])
  React.useEffect(() => {
    if (contentRef.current) {
      const node = contentRef.current
      observer.current?.observe(node)
      setContentHeight(node.clientHeight)

      return () => observer.current?.unobserve(node)
    }
  }, [contentRef.current])

  return (
    <li
      className={
        'flex flex-col items-end ' +
        (experience.frontmatter.stack ? 'gap-1' : 'gap-1 md:gap-2')
      }
    >
      <div
        className={
          'flex justify-end items-stretch hover:cursor-pointer sm:flex-nowrap ' +
          (experience.frontmatter.isSubproject ? '' : 'flex-wrap')
        }
        onClick={() => setExpanded(prev => !prev)}
      >
        <h3
          className={
            experience.frontmatter.isSubproject
              ? 'font-body text-lg md:text-xl text-fill-3'
              : 'font-body text-xl md:text-3xl text-fill-3'
          }
        >
          {experience.frontmatter.githubUrl && (
            <a
              href={experience.frontmatter.githubUrl}
              className="mx-1 self-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src="https://cdn.svgporn.com/logos/github-icon.svg"
                alt="Github Icon"
                className="h-5 md:h-6 inline-block mb-1.5 mx-2"
              />
            </a>
          )}
          {experience.frontmatter.isSubproject && ' • '}
          {experience.frontmatter.title.map(seg => (
            <>
              <span className="nw">{seg}</span>{' '}
            </>
          ))}
        </h3>
        <div
          className={
            'flex items-end ' +
            (experience.frontmatter.isSubproject ? '' : 'ml-3')
          }
        >
          {experience.frontmatter.when && (
            <span className="font-body text-lg md:text-xl text-fill-7 whitespace-nowrap">
              {experience.frontmatter.when}
            </span>
          )}
          <img
            src="https://raw.githubusercontent.com/twbs/icons/main/icons/chevron-right.svg"
            className={
              'p-1.5 transition-transform duration-500 ' +
              (expanded ? 'rotate-90' : 'rotate-0')
            }
          />
        </div>
      </div>
      {experience.frontmatter.stack && (
        <ul className="flex justify-end flex-wrap gap-2">
          {experience.frontmatter.stack.map(stack => (
            <li
              key={stack}
              className="rounded-full h-5 md:h-6 bg-fill-d px-3 font-body text-sm md:text-base text-fill-5"
            >
              {stack}
            </li>
          ))}
        </ul>
      )}
      <div
        className={
          'overflow-hidden ' +
          (isExpansionRender ? 'transition-all duration-500' : '')
        }
        style={{
          height: (expanded ? contentHeight : fixedPartHeight) + 'px',
        }}
      >
        <div ref={contentRef} className="flex flex-col items-end gap-6">
          <div>
            <p
              ref={fixedPartRef}
              className={
                'items-end text-right font-body ' +
                (experience.frontmatter.isSubproject
                  ? 'text-base md:text-lg'
                  : 'text-lg md:text-xl')
              }
            >
              {experience.frontmatter.fixedPart.map(seg => (
                <>
                  <span className="nw">{seg}</span>{' '}
                </>
              ))}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: experience.html }}
              className={
                'flex flex-col items-end text-right font-body ' +
                (experience.frontmatter.isSubproject
                  ? 'text-base md:text-lg'
                  : 'text-lg md:text-xl')
              }
            />
          </div>
          {experience.frontmatter.subprojects?.length && (
            <ul className="flex flex-col items-end gap-6">
              {experience.frontmatter.subprojects.map(projectId => {
                const project = subprojectMap.get(projectId)
                return (
                  project && (
                    <Item
                      key={projectId}
                      experience={project}
                      subprojectMap={subprojectMap}
                    />
                  )
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </li>
  )
}

export default Item
