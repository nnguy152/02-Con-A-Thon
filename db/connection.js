const mongoose = require('mongoose')
mongoose.connect('mongod://localhost/proj2')
mongoose.Promise = Promise
module.exports = mongoose
