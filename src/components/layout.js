import React from 'react'

import '../styles/defaults.scss'
import Header from './header/header'
import SEO from './seo'

const Layout = props => {
  return (
    <>
      <SEO title={props.metaTitle} description={props.metaDescription} />
      <Header />
      {props.children}
    </>
  )
}

export default Layout
