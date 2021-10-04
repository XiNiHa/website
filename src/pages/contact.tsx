import * as React from 'react'
import { PageProps } from 'gatsby'
import PageWrap, { TransitionProps } from '../components/PageWrap'
import SEO from '../components/SEO'

const ContactPage: React.FC<PageProps & TransitionProps> = ({
  transitionStatus,
}) => {
  return (
    <PageWrap transitionStatus={transitionStatus}>
      <SEO title="Contact" />
      <ul className="flex flex-col items-end font-body text-xl md:text-3xl text-fill-5">
        <li className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/twbs/icons/main/icons/envelope.svg"
            alt="Email Icon"
            className="w-6 mx-2"
          />
          <a href="mailto:me@xiniha.dev" className="hover:underline">
            me@xiniha.dev
          </a>
        </li>
        <li className="flex items-center">
          <img
            src="https://cdn.svgporn.com/logos/github-icon.svg"
            alt="Github Icon"
            className="w-6 mx-2"
          />
          <a href="https://github.com/XiNiHa" className="hover:underline">
            @XiNiHa
          </a>
        </li>
        <li className="flex items-center">
          <img
            src="https://raw.githubusercontent.com/twbs/icons/main/icons/twitter.svg"
            alt="Twitter Icon"
            className="w-6 mx-2"
          />
          <a
            href="https://twitter.com/xiniha_1e88df"
            className="hover:underline"
          >
            @xiniha_1e88df
          </a>
        </li>
      </ul>
    </PageWrap>
  )
}

export default ContactPage
