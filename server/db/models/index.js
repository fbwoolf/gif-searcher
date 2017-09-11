const User = require('./user')
const Search = require('./search')

User.hasMany(Search)
Search.belongsTo(User)

module.exports = {
  User,
  Search
}
