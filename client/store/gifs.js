import axios from 'axios'

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '3ebac09823d3492d900e52374f19368b'

/* -----------------    ACTION TYPES ------------------ */

const INITIALIZE = 'INITIALIZE_GIFS'

/* ------------   ACTION CREATORS     ------------------ */

const init = gifs => ({ type: INITIALIZE, gifs })

/* ------------       REDUCER     ------------------ */

export default function reducer (gifs = [], action) {
  switch (action.type) {
    case INITIALIZE:
      return action.gifs
    default:
      return gifs
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchGifs = (word) => dispatch => {
  axios.get('${API_URL}${word.replace(/\s/g, ' + ')}${API_KEY}')
    .then(res => dispatch(init(res.data)))
}
