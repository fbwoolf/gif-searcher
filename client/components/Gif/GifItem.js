import React from 'react'
import { connect } from 'react-redux'

/* -----------------    COMPONENT     ------------------ */

const GifItem = (props) => {
  const { gif } = props

  if (!gif) {
    return null
  }

  return (
    <div className='gif-item'>
      <img src={gif.images.fixed_height_downsampled.url} />
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(GifItem)
