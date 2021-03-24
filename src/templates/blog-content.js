import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogStyles from '../styles/pages/blog.module.scss'

export const blogQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        author
      }
      html
    }
  }
`

const BlogContent = props => {
  console.log(props)
  return (
    <Layout>
      <div className="container">
        <div className={BlogStyles.titleSection}>
          <p className={BlogStyles.title}>
            {props.data.markdownRemark.frontmatter.title}
            <span className={BlogStyles.publisher}>
              By {props.data.markdownRemark.frontmatter.author} on{' '}
              {props.data.markdownRemark.frontmatter.date}
            </span>
          </p>
          <Link to="/blog">Back to Blog</Link>
        </div>

        <div
          className={BlogStyles.innerPageContent}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogContent
