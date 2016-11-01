const express = require('express')
const router = express.Router()
let treesDb = require('../db/trees')

router.get('/', (req, res, next) => {
  treesDb.getTrees()
    .then((trees) => {
      res.render('trees', {trees, title: 'Tree List'})
    })
})

router.get('/new', (req, res, next) => {
  res.render('newtree', {title: 'New Tree'})
})

router.post('/', (req, res, next) => {
  treesDb.addTree(req.body)
    .then(() => {
      res.redirect('/trees')
    })
})

router.post('/delete', (req, res, next) => {
  treesDb.deleteTreeById(req.body.id)
    .then(() => {
      res.redirect('/trees')
    })
})

module.exports = router
