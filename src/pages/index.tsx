import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import PageWrap, { TransitionProps } from '../components/PageWrap'
import SEO from '../components/SEO'

type DataProps = {
  contentMd: {
    html: string
  }
}

const IndexPage: React.FC<PageProps<DataProps> & TransitionProps> = ({
  data,
  transitionStatus,
}) => (
  <PageWrap transitionStatus={transitionStatus}>
    <SEO title="About me" />
    <div
      dangerouslySetInnerHTML={{ __html: data.contentMd.html }}
      className="font-body text-fill-3 text-xl xs:text-3xl"
    />
  </PageWrap>
)

export default IndexPage

export const query = graphql`
  query {
    contentMd: markdownRemark(fileAbsolutePath: {regex: "/about_me\\.md$/"}) {
      html
    }
  }
`
