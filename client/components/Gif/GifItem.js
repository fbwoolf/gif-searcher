import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

/* -----------------    COMPONENT     ------------------ */

const GifItem = (props) => {
  const { gif } = props

  return (
    <div>
      <li>
        <NavLink activeClassName='active' to={`/gifs/${gif.id}`}>
          { gif.name }
        </NavLink>
      </li>
    </div>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = null
const mapDispatch = null

export default connect(mapState, mapDispatch)(GifItem)
