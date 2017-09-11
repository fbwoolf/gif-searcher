const Search = require('../db/models/search')

module.exports = io => {
  io.on('connection', socket => {
    console.log(socket.id, ' has made a persistent connection to the server!')

    socket.on('new-search', search => {
      socket.broadcast.emit('new-search', search)
    })
  })
}
