import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchTrendingGifs } from '../../store'
import SearchItem from './SearchItem'

const SearchList = (props) => {
  const { currentUser, searches, handleClick } = props

  return (
    <ul>
      {
        searches
          .filter(search => search.userId === currentUser.id)
          .map(search => <SearchItem key={search.id} search={search} />)
      }
      <li>
        <NavLink to='/home' onClick={handleClick}>See All Trending</NavLink>
      </li>
    </ul>
  )
}

const mapState = ({ currentUser, searches }) => ({ currentUser, searches })
const mapDispatch = (dispatch, ownProps) => {
  return {
    handleClick (evt) {
      evt.stopPropagation()
      dispatch(fetchTrendingGifs())
    }
  }
}

export default connect(mapState, mapDispatch)(SearchList)
