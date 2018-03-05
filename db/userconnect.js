const userConnect = require('mongoose')
userConnect.connect('mongodb://localhost/passport')
userConnect.Promise = Promise
module.exports = userConnect
