import axios from 'axios'
import socket from '../socket'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_SEARCHES'
const CREATE = 'CREATE_SEARCH'
const REMOVE = 'REMOVE_SEARCH'
const UPDATE = 'UPDATE_SEARCH'

/* ------------   ACTION CREATORS     ------------------ */

const init = searches => ({ type: INITIALIZE, searches })
export const createSearch = search => ({ type: CREATE, search })
const remove = id => ({ type: REMOVE, id })
const update = search => ({ type: UPDATE, search })

/* ------------       REDUCER     ------------------ */

export default function reducer (searches = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.searches

    case CREATE:
      return [...searches, action.search]

    case REMOVE:
      return searches.filter(search => search.id !== action.id)

    case UPDATE:
      return searches.map(search => (
        action.search.id === search.id ? action.search : search
    ))

    default:
      return searches
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchSearches = () => dispatch => {
  axios.get('/api/searches')
    .then(res => dispatch(init(res.data)))
}

export const fetchSearch = id => dispatch => {
  axios.get(`/api/searches/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching search unsuccesful', err))
}

export const removeSearch = id => dispatch => {
  dispatch(remove(id))
  axios.delete(`/api/searches/${id}`)
    .catch(err => console.error(`Removing search: ${id} unsuccesful`, err))
}

export const addSearch = (search) => dispatch => {
  axios.post('/api/searches', search)
    .then(res => res.data)
    .then(newSearch => {
      dispatch(createSearch(newSearch))
      socket.emit('new-search', newSearch)
    })
    .catch(err => console.error(`Creating search: ${search} unsuccesful`, err))
}
