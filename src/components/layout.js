import React from 'react'

import '../styles/defaults.scss'

import Header from './header/header'

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Layout
