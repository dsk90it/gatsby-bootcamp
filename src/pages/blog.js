import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import TitleSection from '../components/title_section/title_section'
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
    <Layout metaTitle="Blog">
      <div className="container">
        <TitleSection title="Blog" description="A Markdown Blog" />

        {cardData.map((item, index) => {
          return (
            <ArticleCard
              key={index}
              cardLink={`/blog/${item.node.fields.slug}/`}
              cardTitle={item.node.frontmatter.title}
              author={item.node.frontmatter.author}
              publishedDate={item.node.frontmatter.date}
              excerpt={item.node.excerpt}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default Blog
