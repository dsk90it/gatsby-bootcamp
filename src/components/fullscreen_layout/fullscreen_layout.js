import React from "react"
import PropTypes from 'prop-types'

import FullScreenStyles from './fullscreen.module.scss'

const FullScreenLayout = (props) => {
  return (
    <div className={`${FullScreenStyles.heroSection} container`}>
      {props.largeHeading ? <h1 dangerouslySetInnerHTML={{ __html: props.largeHeading }} /> : null}
      {props.smallHeading ? <h2 dangerouslySetInnerHTML={{ __html: props.smallHeading }} /> : null}
      <p dangerouslySetInnerHTML={{ __html: props.descriptionText }} />
    </div>
  )
}

FullScreenLayout.propTypes = {
  largeHeading: PropTypes.string,
  smallHeading: PropTypes.string,
  descriptionText: PropTypes.string
};

export default FullScreenLayout