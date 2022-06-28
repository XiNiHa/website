import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import PageWrap, { TransitionProps } from '../components/PageWrap'
import SEO from '../components/SEO'
import Chip from '../components/Chip'

const TechsPage: React.FC<
  PageProps<Queries.TechsPageQuery> & TransitionProps
> = ({ data, transitionStatus }) => {
  const [sorted] = React.useState(() => {
    const sorted = data.techs.nodes.slice()
    sorted.sort(
      (a, b) => (a.frontmatter?.order ?? -1) - (b.frontmatter?.order ?? -1)
    )
    return sorted
  })

  const [activeTech, setActiveTech] = React.useState<
    Queries.TechsPageQuery['techs']['nodes'][number] | null
  >(sorted[0])
  const [wrapperHeight, setWrapperHeight] = React.useState<number>(0)
  const observer = React.useRef<ResizeObserver | null>(null)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    observer.current = new ResizeObserver(entries => {
      const first = entries.shift()

      if (first?.contentRect.height) {
        setWrapperHeight(first.contentRect.height)
      }
    })
  }, [])

  React.useEffect(() => {
    if (contentRef.current) {
      const node = contentRef.current
      observer.current?.observe(node)
      setWrapperHeight(node.clientHeight)

      return () => observer.current?.unobserve(node)
    }
  }, [contentRef.current])

  return (
    <PageWrap transitionStatus={transitionStatus}>
      <SEO title="Techs I use & love" />
      <ul className="flex justify-end flex-wrap gap-2 my-6">
        {sorted
          .filter(tech => Boolean(tech.frontmatter))
          .map((tech, i) => (
            <li key={tech.frontmatter?.title ?? i}>
              <Chip
                isActive={activeTech === tech}
                text={tech.frontmatter?.title ?? ''}
                iconUrl={tech.frontmatter?.iconUrl ?? ''}
                onClick={() => setActiveTech(tech)}
              />
            </li>
          ))}
      </ul>
      <div
        className="transition-all duration-500 overflow-hidden flex justify-end items-center"
        style={{ height: wrapperHeight + 'px' }}
      >
        <div ref={contentRef}>
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={activeTech?.frontmatter?.title}
              addEndListener={(node, done) => {
                node.addEventListener('transitionend', done, false)
              }}
              classNames="fade"
            >
              {activeTech?.html ? (
                <div
                  key={activeTech?.frontmatter?.title}
                  dangerouslySetInnerHTML={{ __html: activeTech.html }}
                  className="w-full float-right font-body text-xl md:text-3xl text-fill-3"
                />
              ) : (
                <div />
              )}
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </PageWrap>
  )
}

export default TechsPage

export const query = graphql`
  query TechsPage {
    techs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//techs//" } }
    ) {
      nodes {
        frontmatter {
          title
          order
          iconUrl
        }
        html
      }
    }
  }
`
