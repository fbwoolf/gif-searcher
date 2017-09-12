import axios from 'axios'
import socket from '../socket'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_SEARCHES'
const GET = 'GET_SEARCH'

/* ------------   ACTION CREATORS     ------------------ */

const init = searches => ({ type: INITIALIZE, searches })
export const getSearch = search => ({ type: GET, search })

/* ------------       REDUCER     ------------------ */

export default function reducer (searches = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.searches

    case GET:
      return [...searches, action.search]

    default:
      return searches
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchSearches = () => dispatch => {
  axios.get('/api/searches')
    .then(res => dispatch(init(res.data)))
}

export const addSearch = (search) => dispatch => {
  axios.post('/api/searches', search)
    .then(res => res.data)
    .then(newSearch => {
      dispatch(getSearch(newSearch))
      socket.emit('new-search', newSearch)
    })
    .catch(err => console.error(`Creating search: ${search} unsuccesful`, err))
}
