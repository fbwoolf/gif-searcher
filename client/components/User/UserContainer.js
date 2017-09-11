import React from 'react'
import { connect } from 'react-redux'
import UserStyle from './UserStyle'

/* -----------------    COMPONENT     ------------------ */

const UserContainer = (props) => {
  return (
    <div>
      <UserStyle />
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = function (state) {
  return {
    currentUser: state.currentUser,
    searches: state.searches
  }
}
const mapDispatch = null

export default connect(mapState, mapDispatch)(UserContainer)
