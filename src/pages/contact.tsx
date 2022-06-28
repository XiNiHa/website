import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import PageWrap, { TransitionProps } from '../components/PageWrap'
import SEO from '../components/SEO'
import SmoothIcon from '../components/SmoothIcon'

const ContactPage: React.FC<
  PageProps<Queries.ContactPageQuery> & TransitionProps
> = ({ data, transitionStatus }) => {
  return (
    <PageWrap transitionStatus={transitionStatus}>
      <SEO title="Contact" />
      <ul className="flex flex-col items-end font-body text-xl md:text-3xl text-fill-5">
        {data.contentsYaml?.contacts?.filter(Boolean).map(contact => (
          <li className="flex items-center" key={contact?.href}>
            {contact!.iconUrl && contact!.iconAlt && (
              <SmoothIcon
                iconUrl={contact!.iconUrl}
                iconAlt={contact!.iconAlt}
                className="w-6 h-6 mx-2"
              />
            )}
            {contact!.href && contact!.text && (
              <a href={contact!.href} className="hover:underline">
                {contact!.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </PageWrap>
  )
}

export const query = graphql`
  query ContactPage {
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
