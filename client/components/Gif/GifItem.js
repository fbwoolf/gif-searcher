import React from 'react'
import { connect } from 'react-redux'
import { Column } from '../Grid/Grid'
import GifStyle from './GifStyle'

/* -----------------    COMPONENT     ------------------ */

const GifItem = (props) => {
  const { gif } = props

  if (!gif) {
    return null
  }

  return (
    <Column xs='12' md='4' lg='2'>
      <div className='col-space'>
        <GifStyle>
          <div className='image-container'>
            <img src={gif.images.fixed_width_downsampled.url} className='gif-image' />
          </div>
        </GifStyle>
      </div>
    </Column>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(GifItem)
