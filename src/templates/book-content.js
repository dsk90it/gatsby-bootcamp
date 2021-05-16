import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/layout'
import * as NpsStyles from '../styles/pages/nps.module.scss'

export const bookQuery = graphql`
  query($slug: String!) {
    booksJson(slug: { eq: $slug }) {
      title
      authors
      categories
      publisher
      publishedDate
      description
      previewLink
      slug
    }
  }
`

const BookContent = props => {
  const book = props.data.booksJson

  return (
    <Layout metaTitle={book.title}>
      <div className="container">
        {/* hero-section starts */}
        <section className={NpsStyles.npsDetails}>
          <div className={NpsStyles.npsDetails__left}>
            <div className={NpsStyles.breadcrumb}>
              <Link to={'/books'}>Books</Link> &nbsp; &gt;&gt; &nbsp;
              <span>{book.title}</span>
            </div>
            <h1>{book.title}</h1>
            <p>{book.description}</p>
          </div>
        </section>
        {/* hero-section ends */}

        {/* table starts */}
        <ul className={NpsStyles.tableSection}>
          <li>
            <b>Author(s): </b>
            {book.authors}
          </li>
          <li>
            <b>Category: </b>
            {book.categories}
          </li>
          <li>
            <b>Publisher: </b>
            {book.publisher}
          </li>
          <li>
            <b>Published On: </b>
            {book.publishedDate}
          </li>
          <li>
            <b>Preview Link: </b>
            <a rel="noreferrer" href={book.previewLink} target="_blank">
              {book.previewLink}
            </a>
          </li>
        </ul>
        {/* table ends */}
      </div>
    </Layout>
  )
}

export default BookContent
