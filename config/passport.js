var LocalStrategy = require('passport-local').Strategy
var User = require('../models/User')

module.exports = function (passport) {
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
}

User.methods.encrypt = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}
