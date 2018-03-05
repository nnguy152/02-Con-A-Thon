var express = require('express')
var methodOverride = require('method-override')
var parser = require('body-parser')
var passport = require('passport')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

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

module.exports = router
