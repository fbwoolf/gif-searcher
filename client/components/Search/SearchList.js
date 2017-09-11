import React from 'react'
import { connect } from 'react-redux'
import SearchItem from './SearchItem'

const SearchList = (props) => {
  const { currentUser, searches } = props

  return (
    <ul>
      {
        searches
          .map(search => <SearchItem key={search.id} search={search} />)
      }
    </ul>
  )
}

const mapState = (state) => {
  return {
    currentUser: state.currentUser,
    searches: state.searches
  }
}

const mapDispatch = null

export default connect(mapState, mapDispatch)(SearchList)

 // .filter(search => search.userId === currentUser.id)
