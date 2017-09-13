import React from 'react'
import { connect } from 'react-redux'
import UserStyle from './UserStyle'
import GifList from '../Gif/GifList'

/* -----------------    COMPONENT     ------------------ */

const UserContainer = () => {
  return (
    <div>
      <UserStyle>
        <GifList />
      </UserStyle>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(UserContainer)
