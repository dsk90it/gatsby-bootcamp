import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import TitleSection from '../components/title_section/title_section'
import Card from '../components/card/card'
import * as BookMainStyles from '../styles/pages/books.module.scss'

const Books = () => {
  const data = useStaticQuery(graphql`
    {
      allBooksJson {
        edges {
          node {
            title
            authors
            categories
            slug
          }
        }
      }
    }
  `)
  const cardData = data.allBooksJson.edges

  return (
    <Layout metaTitle="Books">
      <div className="container">
        <TitleSection title="Books" description="Data Sourced from json file" />

        <div className={BookMainStyles.booksCardWrapper}>
          {cardData.map((item, index) => {
            return (
              <Card key={index} link={`/books/${item.node.slug}`}>
                <strong>{item.node.title}</strong>
                <span>
                  <b>Authors :</b> {item.node.authors ? item.node.authors : '-'}
                </span>
                <span>
                  <b>Category :</b>{' '}
                  {item.node.categories ? item.node.categories : '-'}
                </span>
              </Card>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Books
