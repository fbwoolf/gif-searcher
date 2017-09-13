import React from 'react'
import { connect } from 'react-redux'
import GifStyle from './GifStyle'
import GifItem from './GifItem'

const GifList = (props) => {
  const { gifs } = props

  return (
    <GifStyle>
      <div className='gif-list'>
        {
          gifs.map(gif => <GifItem key={gif.id} gif={gif} />)
        }
      </div>
    </GifStyle>
  )
}

const mapState = ({ gifs }) => ({ gifs })
const mapDispatch = null

export default connect(mapState, mapDispatch)(GifList)
