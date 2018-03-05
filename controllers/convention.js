const express = require('express')
const router = express.Router()
const parser = require('body-parser')
const methodOverride = require('method-override')
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

// get convention by id from home page
// "save" maybe push this convention into an array?
// display this convention array on profile page
// PROFILE page
router.get('/index', (req, res) => {
  res.render('conventions/index')
})

// log in/signup/logout
router.get('/signup', (req, res) => {
  res.render('signup', {message: req.flash('signupMessage')})
})
router.post('/signup', (req, res) => {
  var signupStrategy = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  })
  return signupStrategy(req, res)
})
router.get('/login', (req, res) => {
  res.render('login', {message: req.flash('loginMessage')})
})
router.post('/login', (req, res) => {
  var loginProperty = passport.authenticate('local-login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
  return loginProperty(req, res)
})
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// NEW page. For users to add their own conventions
router.get('/new', (req, res) => {
  res.render('conventions/new')
})
// for users to add their own convention in
// after figure 'faving cons,' have it pushed to faveList array
// to populate on profile
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

// Shows more details about each convention
// "save" convention to display on profile page
// add "save" button -when clicked, pushes convention into array
// then in profile page, displays array^ router up there^^^
var faveList = []
router.get('/show/:id', (req, res) => {
  Con.findOne({_id: req.params.id})
  .then(con => {
    res.render('conventions/show', con)
  })
})

// to edit but no function yet
// should only be able to edit conventions that users self input
router.get('/edit/:id', (req, res) => {
  Con.findOne({_id: req.params.id}).then(con => {
    res.render('conventions/edit', con)
  })
})

module.exports = router
