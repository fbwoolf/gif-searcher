import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import NavbarContainer from './Navigation/NavbarContainer'

const Main = (props) => {
  const {children} = props

  return (
    <div id='main'>
      <NavbarContainer />
      {
      	isLoggedIn &&
      }
      { children }
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.currentUser.id
  }
}
const mapDispatch = null

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object
}
