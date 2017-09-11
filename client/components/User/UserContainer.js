import React from 'react'
import { connect } from 'react-redux'
import NewSearchEntry from '../Search/NewSearchEntry'
import UserStyle from './UserStyle'
import GifList from '../Gif/GifList'

/* -----------------    COMPONENT     ------------------ */

const UserContainer = (props) => {
  return (
    <div>
      <NewSearchEntry />
      <UserStyle>
        <GifList />
      </UserStyle>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = function (state) {
  return {
    currentUser: state.currentUser
  }
}
const mapDispatch = null

export default connect(mapState, mapDispatch)(UserContainer)
