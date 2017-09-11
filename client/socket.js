import io from 'socket.io-client'
import store, { fetchSearch } from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('new-search', search => {
    store.dispatch(fetchSearch(search))
  })
})

export default socket
