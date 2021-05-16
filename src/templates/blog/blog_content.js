import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import * as BlogStyles from '../../styles/pages/blog.module.scss'
import TitleSection from '../../components/title_section/title_section'

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
  return (
    <Layout metaTitle={props.data.markdownRemark.frontmatter.title}>
      <div className="container">
        <TitleSection
          title={props.data.markdownRemark.frontmatter.title}
          description={`By ${props.data.markdownRemark.frontmatter.author} on ${props.data.markdownRemark.frontmatter.date}`}
          linkText={'Back to Blog'}
          linkUrl={'/blog'}
        />

        <div
          className={BlogStyles.innerPageContent}
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogContent
