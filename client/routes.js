import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import history from './history'
import { me, fetchUsers, fetchSearches, fetchTrendingGifs } from './store'
import { Main, Login, Signup, UserContainer, GifList } from './components'

/* -----------------    COMPONENT     ------------------ */

class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    const {isLoggedIn} = this.props

    return (
      <Router history={history}>
        <Main>
          <Switch>
            {/* Routes placed here are available to all visitors */}
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            {
              isLoggedIn &&
                <Switch>
                  {/* Routes placed here are only available after logging in */}
                  <Route path='/home' component={UserContainer} />
                  <Route path='/searches/:searchId' component={GifList} />
                </Switch>
            }
            {/* Displays our Login component as a fallback */}
            <Route component={Login} />
          </Switch>
        </Main>
      </Router>
    )
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.currentUser.id
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(me())
      dispatch(fetchUsers())
      dispatch(fetchSearches())
      dispatch(fetchTrendingGifs())
    }
  }
}

export default connect(mapState, mapDispatch)(Routes)

/* -----------------    PROPTYPES     ------------------ */

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
