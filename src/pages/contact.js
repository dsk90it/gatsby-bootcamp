import React from "react"

import Layout from '../components/layout'
import HomeStyles from '../styles/pages/home.module.scss'

const Contact = () => {
  return (
    <Layout>
      <Layout>
        <div className={`${HomeStyles.heroSection} container`}>
          <h2>I occasionally take on freelance opportunities.</h2>
          <p>Have an exciting project where you need some help?<br />Send me over a message, and  <a href="mailto:dsk90it@gmail.com">let's chat.</a></p>
        </div>
      </Layout>
    </Layout>
  )
}

export default Contact
