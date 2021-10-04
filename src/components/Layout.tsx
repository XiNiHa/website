import * as React from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="mx-auto container h-screen flex flex-col lg:flex-row-reverse justify-center items-center">
      <div className="flex-shrink-0 flex flex-col lg:flex-row-reverse">
        <Nav />
        <div className="mx-4 lg:my-4 border-t border-l border-dashed border-fill-3 my-4 lg:mx-8" />
      </div>
      <main className="flex-1 overflow-y-scroll lg:max-w-3xl">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
