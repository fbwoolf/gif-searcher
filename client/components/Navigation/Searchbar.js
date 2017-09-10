import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchbarStyle from './SearchbarStyle'
import { updateSearch, addSearch } from '../store'

/* -----------------    COMPONENT     ------------------ */

class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
    	word: ''
    }
  }

  render () {
    <SearchbarStyle>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='word'
          placeholder='Search GIPHY'
          onChange={handleChange}
          value={word}
	     	/>
      </form>
    </SearchbarStyle>
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = (state) => {
  return {
    word: state.word
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleChange (evt) {
      dispatch(updateSearch(evt.target.value))
    },
    handleSubmit (evt) {
    	evt.preventDefault()
    	dispatch(addSearch())
    }
  }
}

export default connect(mapState, mapDispatch)(SearchBar)
