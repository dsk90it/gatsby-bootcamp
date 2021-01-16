import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <div className="container">
        <h1>Blog</h1>
        <p>Posts will show up here later on.</p>
      </div>
    </Layout>
  )
}

export default Blog
