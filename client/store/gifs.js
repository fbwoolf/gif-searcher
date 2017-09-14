import axios from 'axios'

const API_URL = 'https://api.giphy.com/v1/gifs/'
const API_KEY = '3ebac09823d3492d900e52374f19368b'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_GIFS'
const REQUEST = 'REQUEST_GIFS'

/* ------------   ACTION CREATORS     ------------------ */

const init = gifs => ({ type: INITIALIZE, gifs })
const request = gifs => ({ type: REQUEST, gifs })

/* ------------       REDUCER     ------------------ */

export default function reducer (gifs = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.gifs
    case REQUEST:
      return action.gifs
    default:
      return gifs
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchTrendingGifs = () => dispatch => {
  axios.get(`${API_URL}trending?api_key=${API_KEY}`)
    .then(res => dispatch(init(res.data.data)))
    .catch(err => console.error('Fetching data unsuccesful', err))
}

export const fetchSearchWordGifs = (word) => dispatch => {
  axios.get(`${API_URL}search?q=${word}&api_key=${API_KEY}`)
    .then(res => dispatch(request(res.data.data)))
    .catch(err => console.error('Fetching data unsuccesful', err))
}

export const requestGifs = (word) => dispatch => {
  const searchWord = word.trim().replace(/ /g, '+')
  axios.get(`${API_URL}search?q=${searchWord}&api_key=${API_KEY}`)
    .then(res => dispatch(request(res.data.data)))
    .catch(err => console.error('Fetching data unsuccesful', err))
}
