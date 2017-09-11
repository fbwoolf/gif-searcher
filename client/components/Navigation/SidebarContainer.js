import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logout} from '../../store'
import SidebarStyle from './SidebarStyle'
import SearchList from '../Search/SearchList'

/* -----------------    COMPONENT     ------------------ */

class SidebarContainer extends Component {
  constructor (props) {
    super(props)
    this.renderLoggedIn = this.renderLoggedIn.bind(this)
    this.renderLoggedOut = this.renderLoggedOut.bind(this)
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <SidebarStyle>
        <div className='sidebar-header'>
          <h1>GIF SEARCHER</h1>
        </div>
        {
          isLoggedIn ? this.renderLoggedIn() : this.renderLoggedOut()
        }
      </SidebarStyle>
    )
  }

  renderLoggedIn () {
    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <SearchList />
      </div>
    )
  }

  renderLoggedOut () {
    return (
      <div>
        <h1 />
      </div>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.currentUser.id,
    currentUser: state.currentUser
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(SidebarContainer)
