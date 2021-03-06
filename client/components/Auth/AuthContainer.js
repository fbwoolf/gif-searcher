import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../../store'
import AuthStyle from './AuthStyle'
import AuthButton from '../Navigation/AuthButton'

/* -----------------    COMPONENT     ------------------ */

const AuthContainer = (props) => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <AuthStyle>
      <div className='auth-header'>
        <h1>{displayName}</h1>
      </div>
      <form onSubmit={handleSubmit} name={name}>
        {
          (name === 'signup') &&
          <div>
            <input name='username' type='text' placeholder='Name' />
          </div>
        }
        <div>
          <input name='email' type='text' placeholder='Email' />
        </div>
        <div>
          <input name='password' type='password' placeholder='Password' />
        </div>
        <div>
          <AuthButton type='submit'>{displayName}</AuthButton>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a href='/auth/google'>{displayName} with Google</a>
    </AuthStyle>
  )
}

const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.currentUser.error
  }
}

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Signup',
    error: state.currentUser.error
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const formName = evt.target.name
      let username = null
      if (formName === 'signup') username = evt.target.username.value
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(username, email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthContainer)
export const Signup = connect(mapSignup, mapDispatch)(AuthContainer)

/* -----------------    PROP TYPES     ------------------ */

AuthContainer.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
