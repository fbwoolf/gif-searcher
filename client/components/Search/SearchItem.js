import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchSearchWordGifs } from '../../store'

/* -----------------    COMPONENT     ------------------ */

const SearchItem = (props) => {
  const { search, handleClick } = props

  return (
    <div>
      <li>
        <NavLink activeClassName='active' to={'/home'} onClick={handleClick}>
          { search.word }
        </NavLink>
      </li>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = (dispatch, ownProps) => {
  return {
    handleClick (evt) {
      evt.stopPropagation()
      const word = ownProps.search.word
      dispatch(fetchSearchWordGifs(word))
    }
  }
}

export default connect(mapState, mapDispatch)(SearchItem)
