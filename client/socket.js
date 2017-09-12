import io from 'socket.io-client'
import store, { createSearch } from './store'

const socket = io(window.location.origin)

socket.on('connect', () => {
  console.log('Connected!')

  socket.on('new-search', search => {
    store.dispatch(createSearch(search))
  })
})

export default socket
