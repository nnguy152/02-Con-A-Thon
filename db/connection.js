const mongoose = require('mongoose')
// const userConnect = require('mongoose')

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/conventions')
  // userConnect.connect('mongodb://localhost/conventions')
}

mongoose.Promise = Promise
module.exports = mongoose

// userConnect.Promise = Promise
// module.exports = userConnect
