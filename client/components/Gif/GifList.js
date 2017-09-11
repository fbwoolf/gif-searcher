
import React from 'react'
import { connect } from 'react-redux'
import GifItem from './GifItem'

const GifList = (props) => {
  const { gifs } = props

  return (
    <ul>
      {
        gifs.map(gif => <GifItem key={gif.id} gif={gif} />)
      }
    </ul>
  )
}

const mapState = ({ currentUser, gifs }) => ({ currentUser, gifs })
const mapDispatch = null

export default connect(mapState, mapDispatch)(GifList)
