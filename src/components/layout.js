import React from 'react'

import '../styles/defaults.scss'
import Header from './header/header'
import Seo from './seo'

const Layout = props => {
  return (
    <>
      <Seo title={props.metaTitle} description={props.metaDescription} />
      <Header />
      {props.children}
    </>
  )
}

export default Layout
