import * as React from 'react'
import { usePrevious } from 'react-use'
import { Experience } from '../../pages/experiences'
import SmoothIcon from '../SmoothIcon'

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
          className={`
            font-body text-fill-3
            ${
              experience.frontmatter.isSubproject
                ? 'text-lg md:text-xl'
                : 'text-xl md:text-3xl'
            }
          `}
        >
          {experience.frontmatter.pageUrl && (
            <div className="inline-block">
              <a
                href={experience.frontmatter.pageUrl}
                className="mx-1 flex items-center"
                onClick={e => e.stopPropagation()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-house-door-fill w-5 h-5 md:w-6 md:h-6 inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                </svg>
              </a>
            </div>
          )}
          {experience.frontmatter.githubUrl && (
            <a
              href={experience.frontmatter.githubUrl}
              className="mx-1"
              onClick={e => e.stopPropagation()}
            >
              <SmoothIcon
                iconUrl="https://cdn.svgporn.com/logos/github-icon.svg"
                iconAlt="Github Icon"
                className="w-5 h-5 md:w-6 md:h-6 mx-2 inline-block"
              />
            </a>
          )}
          {experience.frontmatter.isSubproject && ' • '}
          {experience.frontmatter.title.map((seg, i) => (
            <>
              <span className="nw" key={i}>
                {seg}
              </span>{' '}
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
              {experience.frontmatter.fixedPart.map((seg, i) => (
                <>
                  <span className="nw" key={i}>
                    {seg}
                  </span>{' '}
                </>
              ))}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: experience.html }}
              className={
                'flex flex-col items-end text-right font-body underline-a ' +
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
