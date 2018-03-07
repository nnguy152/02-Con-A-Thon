// const mongoose = require('../db/connection')
// const bcrypt = require('bcrypt-nodejs')

// const UserSchema = new mongoose.Schema({
//   local: {
//     username: String,
//     password: String
//   }
// })

// UserSchema.methods.encrpyt = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
// }
// UserSchema.methods.validPassword = function (password) {
//   return bcrypt.compareSync(password, this.local.password)
// }

// const User = mongoose.model('User', UserSchema)
// module.exports = User
