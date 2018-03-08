const express = require('express')
const router = express.Router()
const passport = require('passport')
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

// displays user input cons on profile
router.get('/index', (req, res) => {
  Con.find({__v: 0}).then(con => res.render('conventions/index', { con }))
})

router.get('/edit/:id', (req, res) => {
  Con.findOne({_id: req.params.id})
  .then(con => res.render('conventions/edit', con))
})

router.post('/', (req, res) => {
  Con.create({
    name: req.body.name,
    date: req.body.date,
    location: req.body.location,
    url: req.body.url,
    genre: req.body.genre
  })
  .then(() => res.redirect('conventions/index'))
})

// log in/signup/logout
router.get('/signup', (req, res) => {
  res.render('signup'
  , {message: req.flash('signupMessage')}
  )
})
router.post('/signup', (req, res) => {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/conventions/signup',
    failureRedirect: '/conventions/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})
router.get('/login', (req, res) => {
  res.render('login'
  , {message: req.flash('loginMessage')}
)
})
router.post('/login', (req, res) => {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect: '/conventions/index',
    failureRedirect: '/conventions/login',
    failureFlash: true
  })
  return loginProperty(req, res)
})
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

router.get('/:id', (req, res) => {
  Con.findOne({_id: req.params.id})
  .then(con => res.render('index', con))
})

router.put('/:id', (req, res) => {
  Con.findOneAndUpdate({_id: req.params.id}, req.body)
  .then(() => {
    res.redirect('index')
  })
})

router.delete('/:id', (req, res) => {
  Con.findOneAndRemove({_id: req.params.id})
  .then(() => res.redirect('index'))
})

module.exports = router
