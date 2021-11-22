import * as React from 'react'
import { useLocation } from '@reach/router'
// @ts-ignore-next-line
import TransitionLink from 'gatsby-plugin-transition-link'

const Nav: React.FC = () => {
  const location = useLocation()
  const links = {
    '/': 'About me',
    '/techs': 'Techs I use & love',
    '/experiences': 'Experiences',
    '/contact': 'Contact',
  }

  return (
    <div className="my-2 flex flex-row min-h-[120px] lg:flex-col items-end lg:items-start">
      <h1 className="font-title text-right lg:text-left text-xl xs:text-3xl lg:text-5xl mx-2 xs:whitespace-nowrap">
        <span className="nw">신의하</span>{' / '}
        <span className="nw">Iha Shin</span>
      </h1>
      <nav className="mx-2 min-w-[200px]">
        <ul className="font-sans">
          {Object.entries(links).map(([link, text]) => (
            <li
              key={link}
              className={
                'transition-all whitespace-nowrap ' +
                (location.pathname === link
                  ? 'text-fill-3 text-lg xs:text-xl lg:text-3xl font-semibold'
                  : 'text-fill-5 text-base xs:text-lg hover:text-xl lg:text-xl lg:hover:text-3xl')
              }
              >
              <TransitionLink
                to={link}
                exit={{ length: 0.5 }}
                entry={{ length: 0.5 }}
              >
                {text}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Nav
