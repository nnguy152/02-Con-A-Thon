var LocalStrategy = require('passport-local').Strategy
var User = require('../models/User')

module.exports = function (passport) {
  passport.serializeUser(function (user, callback) {
    callback(null, user.id)
  })
  passport.deserializeUser(function (id, callback) {
    User.findById(id, function (err, user) {
      callback(err, user)
    })
  })

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, callback) {
    User.findOne({'local.username': username}, function (err, user) {
      if (err) return callback(err)
      if (user) {
        return callback(null, false, req.flash('signupMessage', 'This username is already in use.'))
      } else {
        var newUser = new User()
        newUser.local.username = username
        newUser.local.password = newUser.encrypt(password)

        newUser.save(function (err) {
          if (err) throw err
          return callback(null, newUser)
        })
      }
    })
  }))

  passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, username, password, callback) {
    User.findOne({'local.username': username}, function (err, user) {
      if (err) return callback(err)
      if (!user) return callback(null, false, req.flash('loginMessage', 'No user by that name :('))
      if (!user.validPassword(password)) return callback(null, false, req.flash('loginMessage', 'Wrong Password!'))
      return callback(null, user)
    })
  }))
}
