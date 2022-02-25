import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import ScrollArea from './ScrollArea'

type TransitionStatus = 'entering' | 'entered' | 'exiting' | 'exited'

type Props = {
  children: React.ReactNode
  transitionStatus: TransitionStatus
}

export type TransitionProps = {
  transitionStatus: TransitionStatus
}

type DataProps = {
  techs: {
    nodes: {
      frontmatter: {
        iconUrl: string
      }
    }[]
  }
  contentsYaml: {
    contacts: {
      iconUrl: string
    }[]
  }
}

const PageWrap: React.FC<Props> = ({ children, transitionStatus }) => {
  const data = useStaticQuery<DataProps>(graphql`
    query {
      techs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//techs//" } }
      ) {
        nodes {
          frontmatter {
            iconUrl
          }
        }
      }
      contentsYaml {
        contacts {
          iconUrl
        }
      }
    }
  `)

  const getClassName = () => {
    switch (transitionStatus) {
      case 'entered':
        return 'opacity-100'
      default:
        return 'opacity-0'
    }
  }

  return (
    <>
      <Helmet>
        {[
          ...data.techs.nodes.map(tech => tech.frontmatter.iconUrl),
          ...data.contentsYaml.contacts.map(contact => contact.iconUrl),
        ].map(url => (
          <link
            key={url}
            rel="preload"
            href={url}
            as="image"
            type="image/svg+xml"
          />
        ))}
      </Helmet>
      <ScrollArea
        className={'h-full transition-opacity duration-500 ' + getClassName()}
        containerClassName="max-w-full h-full text-right transition-opacity duration-500 flex flex-col items-end p-4 h-full lg:max-h-[70vh]"
      >
        {children}
      </ScrollArea>
    </>
  )
}

export default PageWrap
