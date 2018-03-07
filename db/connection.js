const conConnect = require('mongoose')
// const userConnect = require('mongoose')

// if (process.env.NODE_ENV == 'production') {
//   conConnect.connect(process.env.MLAB_URL)
// } else {
conConnect.connect('mongodb://localhost/conventions')
  // userConnect.connect('mongodb://localhost/conventions')
// }

conConnect.Promise = Promise
module.exports = conConnect

// userConnect.Promise = Promise
// module.exports = userConnect
