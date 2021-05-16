import React from 'react'

import '../../styles/layout.scss'
import Header from '../header/header'
import Seo from '../seo/seo'

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
