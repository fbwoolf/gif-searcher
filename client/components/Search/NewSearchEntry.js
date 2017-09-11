import React from 'react'
import { connect } from 'react-redux'
import NewSearchStyle from './NewSearchStyle'
import { writeSearchWord, addSearch } from '../../store'
import SearchButton from '../Navigation/SearchButton'

/* -----------------    COMPONENT     ------------------ */

const NewSearchEntry = (props) => {
  const { newSearchEntry, handleSubmit, handleChange } = props

  return (
    <NewSearchStyle>
      <form onSubmit={handleSubmit}>
        <input
          value={newSearchEntry}
          onChange={handleChange}
          type='text'
          name='searchWord'
          placeholder='Search GIPHY. Type a word.'
        />
        <SearchButton type='submit'>Save Search</SearchButton>
      </form>
    </NewSearchStyle>
  )
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    newSearchEntry: state.newSearchEntry
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    handleChange (evt) {
      dispatch(writeSearchWord(evt.target.value))
    },
    handleSubmit (evt) {
      evt.preventDefault()
      const word = evt.target.searchWord.value
      dispatch(addSearch({ word }, ownProps.history))
      dispatch(writeSearchWord(''))
    }
  }
}

export default connect(mapState, mapDispatch)(NewSearchEntry)
