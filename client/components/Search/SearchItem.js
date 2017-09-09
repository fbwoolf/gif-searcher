import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/* -----------------    COMPONENT     ------------------ */

const SearchItem = (props) => {
  const { search } = props

  return (
    <div>
      <li>
        <NavLink activeClassName='active' to={`/searches/${search.id}`}>
          { search.name }
        </NavLink>
      </li>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(SearchItem)
