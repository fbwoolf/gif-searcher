import React from 'react'
import { connect } from 'react-redux'
import SearchItem from './SearchItem'

const SearchList = (props) => {
  const { currentUser, searches } = props

  return (
    <ul>
      {
        searches
          .filter(search => search.userId === currentUser.id)
          .map(search => <SearchItem key={search.id} search={search} />)
      }
    </ul>
  )
}

const mapState = ({ currentUser, searches }) => ({ currentUser, searches })
const mapDispatch = null

export default connect(mapState, mapDispatch)(SearchList)
