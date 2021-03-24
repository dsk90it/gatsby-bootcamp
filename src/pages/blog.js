import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import BlogMainStyles from '../styles/pages/blog.module.scss'
import ArticleCard from '../components/article/article'

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            excerpt(truncate: false, pruneLength: 300)
            frontmatter {
              title
              date
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const cardData = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="container">
        <div className={BlogMainStyles.titleSection}>
          <h1>Blog</h1>
          {/* <a href="#">View All Tags</a> */}
        </div>

        <div className={BlogMainStyles.contentSection}>
          {cardData.map((item, index) => {
            return (
              <ArticleCard
                key={index}
                cardLink={`#`}
                cardTitle={item.node.frontmatter.title}
                author={item.node.frontmatter.author}
                publishedDate={item.node.frontmatter.date}
                excerpt={item.node.excerpt}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
