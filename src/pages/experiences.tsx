import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import PageWrap, { TransitionProps } from '../components/PageWrap'
import Section from '../components/experiences/Section'
import Item from '../components/experiences/Item'
import SEO from '../components/SEO'

export type Experience =
  Queries.ExperiencesPageQuery['experiences']['nodes'][number]

const getDirectParentDir = (path: string) => /\/([^/]*)\/[^/]*$/.exec(path)?.[1]

const getFilenameWithoutExt = (path: string) =>
  /([^/]*)\.[^/]*$/.exec(path)?.[1]

const sectionOrder = [
  'work Experiences',
  'Personal Projects',
  'Open Source Contributions',
  'Education',
]

const ExperiencesPage: React.FC<
  PageProps<Queries.ExperiencesPageQuery> & TransitionProps
> = ({ data, transitionStatus }) => {
  const subprojects = data.experiences.nodes.filter(
    item => item.frontmatter?.isSubproject
  )

  const subprojectMap = new Map<string, Experience>()
  for (const subproject of subprojects) {
    const id =
      subproject.fileAbsolutePath &&
      getFilenameWithoutExt(subproject.fileAbsolutePath)
    if (id) {
      subprojectMap.set(id, subproject)
    }
  }

  const sectionsMap = new Map<string, Experience[]>()
  for (const experience of data.experiences.nodes) {
    if (!experience.frontmatter?.isSubproject) {
      const sectionTitle =
        experience.fileAbsolutePath &&
        getDirectParentDir(experience.fileAbsolutePath)
      if (sectionTitle) {
        let section = sectionsMap.get(sectionTitle)
        if (!section) {
          section = []
          sectionsMap.set(sectionTitle, section)
        }
        section.push(experience)
      }
    }
  }

  for (const experiences of Array.from(sectionsMap.values())) {
    experiences.sort(
      (a, b) =>
        (a.frontmatter?.order ?? Number.MAX_SAFE_INTEGER) -
        (b.frontmatter?.order ?? Number.MAX_SAFE_INTEGER)
    )
  }

  const sectionArr = Array.from(sectionsMap.entries())
  sectionArr.sort(
    ([a], [b]) => sectionOrder.indexOf(a) - sectionOrder.indexOf(b)
  )

  return (
    <PageWrap transitionStatus={transitionStatus}>
      <SEO title="Experiences" />
      <div className="flex flex-col items-end gap-10">
        {sectionArr.map(([title, experiences]) => (
          <Section key={title} title={title}>
            {experiences.map((experience, index) => (
              <Item
                key={experience.frontmatter?.title?.join(' ')}
                experience={experience}
                subprojectMap={subprojectMap}
                expandedByDefault={index === 0}
              />
            ))}
          </Section>
        ))}
      </div>
    </PageWrap>
  )
}

export default ExperiencesPage

export const query = graphql`
  query ExperiencesPage {
    experiences: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//experiences//" } }
    ) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title: title_
          pageUrl
          githubUrl
          order
          when
          stack
          subprojects
          isSubproject
          fixedPart
        }
        html
      }
    }
  }
`
