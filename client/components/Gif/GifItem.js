import React from 'react'
import { connect } from 'react-redux'
import GifStyle from './GifStyle'

/* -----------------    COMPONENT     ------------------ */

const GifItem = (props) => {
  const { gif } = props

  if (!gif) {
    return null
  }

  return (
    <GifStyle>
      <li>
        <img src={gif.images.fixed_width_downsampled.url} />
      </li>
    </GifStyle>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(GifItem)
