import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout/layout'
import TitleSection from '../components/title_section/title_section'
import * as NpsStyles from '../styles/pages/nps.module.scss'

const Card = props => {
  return (
    <Link to={props.link} className={NpsStyles.npsCard}>
      <strong>{props.title}</strong>
      <span>Authors : {props.authors ? props.authors : '-'}</span>
      <span>Category : {props.category ? props.category : '-'}</span>
    </Link>
  )
}

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

        <div className={NpsStyles.npsCardWrapper}>
          {cardData.map((item, index) => {
            return (
              <Card
                key={index}
                link={`/books/${item.node.slug}`}
                title={item.node.title}
                authors={item.node.authors}
                category={item.node.categories}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Books
