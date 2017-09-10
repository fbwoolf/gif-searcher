const router = require('express').Router()
const {Search} = require('../db/models')
module.exports = router

router.param('searchId', (req, res, next, id) => {
  Search.findById(id)
    .then(search => {
      if (!search) {
        const err = Error('Search not found')
        err.status = 400
        throw err
      }
      req.search = search
      next()
      return null
    })
    .catch(next)
})

router.get('/', (req, res, next) => {
  Search.findAll()
    .then(searches => res.json(searches))
    .catch(next)
})

router.get('/:searchId', (req, res, next) => {
  res.json(req.search)
})

router.put('/:searchId', (req, res, next) => {
  req.search.update(req.body)
    .then(search => res.status(200).json(search))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Search.create(req.body)
    .then(search => res.status(201).json(search))
    .catch(next)
})

router.delete('/:searchId', (req, res, next) => {
  req.search.destroy()
    .then(() => res.status(204).end())
    .catch(next)
})
