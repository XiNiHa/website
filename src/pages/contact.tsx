import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import PageWrap, { TransitionProps } from '../components/PageWrap'
import SEO from '../components/SEO'
import SmoothIcon from '../components/SmoothIcon'

interface DataProps {
  contentsYaml: {
    contacts: {
      iconUrl: string
      iconAlt: string
      href: string
      text: string
    }[]
  }
}

const ContactPage: React.FC<PageProps<DataProps> & TransitionProps> = ({
  data,
  transitionStatus,
}) => {
  return (
    <PageWrap transitionStatus={transitionStatus}>
      <SEO title="Contact" />
      <ul className="flex flex-col items-end font-body text-xl md:text-3xl text-fill-5">
        {data.contentsYaml.contacts.map(contact => (
          <li className="flex items-center" key={contact.href}>
            <SmoothIcon
              iconUrl={contact.iconUrl}
              iconAlt={contact.iconAlt}
              className="w-6 h-6 mx-2"
            />
            <a href={contact.href} className="hover:underline">
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </PageWrap>
  )
}

export const query = graphql`
  query {
    contentsYaml {
      contacts {
        iconUrl
        iconAlt
        href
        text
      }
    }
  }
`

export default ContactPage
