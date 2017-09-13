import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import NavbarContainer from './Navigation/NavbarContainer'
import NewSearchEntry from './Search/NewSearchEntry'
import SidebarContainer from './Navigation/SidebarContainer'

const Main = (props) => {
  const {children, isLoggedIn, currentUser} = props

  return (
    <div id='main'>
      <NavbarContainer />
      {
        isLoggedIn &&
          <div>
            <NewSearchEntry userId={currentUser.id} />
            <SidebarContainer />
          </div>
      }
      { children }
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({currentUser}, ownProps) => {
  return {
    currentUser,
    isLoggedIn: !!currentUser.id
  }
}
const mapDispatch = null

// The `withRouter` wrapper makes sure that updates are not blocked when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/* -----------------    PROPTYPES     ------------------ */

Main.propTypes = {
  children: PropTypes.object
}
