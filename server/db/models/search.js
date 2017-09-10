'use strict'

const Sequelize = require('sequelize')
const db = require('../db')

const Search = db.define('search', {
  word: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Search
