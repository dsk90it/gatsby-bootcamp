import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import ArticleCardStyles from './article.module.scss'

const ArticleCard = props => {
  return (
    <article className={ArticleCardStyles.blogMainCard}>
      <Link to={props.cardLink}>
        <h3>{props.cardTitle}</h3>
        <p className={ArticleCardStyles.publisher}>
          By {props.author} on {props.publishedDate}
        </p>
        <p>{props.excerpt}</p>
        <p className={ArticleCardStyles.readmore}>
          Read More
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
          </svg>
        </p>
      </Link>
    </article>
  )
}

ArticleCard.propTypes = {
  cardLink: PropTypes.string,
  cardTitle: PropTypes.string,
  author: PropTypes.string,
  publishedDate: PropTypes.string,
  excerpt: PropTypes.string,
}

export default ArticleCard
