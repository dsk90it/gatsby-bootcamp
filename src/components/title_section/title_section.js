import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import TitleStyles from './title_section.module.scss'

const TitleSection = props => {
  const description = (
    <span className={TitleStyles.description}>{props.description}</span>
  )

  return (
    <div className={TitleStyles.titleSection}>
      <p className={TitleStyles.title}>
        {props.title}
        {props.description ? description : null}
      </p>

      {props.linkText ? <Link to={props.linkUrl}>{props.linkText}</Link> : null}
    </div>
  )
}

TitleSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
}

export default TitleSection
