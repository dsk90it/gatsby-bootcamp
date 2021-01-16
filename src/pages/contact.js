import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import FullScreenLayout from "../components/fullscreen_layout/fullscreen_layout"

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          emailId
        }
      }
    }
  `)

  return (
    <Layout>
      <Layout>
        <FullScreenLayout
          smallHeading={"I occasionally take on freelance opportunities."}
          descriptionText={`Have an exciting project where you need some help?<br />Send me over a message, and <a href="mailto:${data.site.siteMetadata.emailId}">let's chat.</a>`}
        />
      </Layout>
    </Layout>
  )
}

export default Contact
