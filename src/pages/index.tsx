import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import PageWrap, { TransitionProps } from '../components/PageWrap'
import SEO from '../components/SEO'

const IndexPage: React.FC<
  PageProps<Queries.IndexPageQuery> & TransitionProps
> = ({ data, transitionStatus }) => (
  <PageWrap transitionStatus={transitionStatus}>
    <SEO title="About me" />
    {data.contentMd?.html && (
      <div
        dangerouslySetInnerHTML={{ __html: data.contentMd.html }}
        className="font-body text-fill-3 text-xl xs:text-3xl"
      />
    )}
  </PageWrap>
)

export default IndexPage

export const query = graphql`
  query IndexPage {
    contentMd: markdownRemark(fileAbsolutePath: {regex: "/about_me\\.md$/"}) {
      html
    }
  }
`
