import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import * as CardStyles from './card.module.scss'

const Card = props => {
  return (
    <Link to={props.link} className={CardStyles.card}>
      {props.children}
    </Link>
  )
}

Card.propTypes = {
  link: PropTypes.string,
}

export default Card
