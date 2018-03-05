const express = require('express')
const router = express.Router()
const Con = require('../models/Convention')

// displays top ten conventions on homepage
router.get('/', (req, res) => {
  Con.find({}).then(con => {
    var animeCon = con.filter((i) => {
      return i.genre === 'anime'
    })
    var comicCon = con.filter((i) => {
      return i.genre === 'comic'
    })
    var gameCon = con.filter((i) => {
      return i.genre === 'gaming'
    })
    res.render('index', { animeCon, comicCon, gameCon })
  })
})

router.get('/new', (req, res) => {
  res.render('conventions/new')
})

router.get('/show/:id', (req, res) => {
  Con.findOne({_id: req.params.id}).then(con => {
    res.render('conventions/show', con)
  })
})
router.get('/edit/:id', (req, res) => {
  Con.findOne({_id: req.params.id}).then(con => {
    res.render('conventions/edit', con)
  })
})

module.exports = router
