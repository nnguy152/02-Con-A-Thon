const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/conventions')
mongoose.Promise = Promise
module.exports = mongoose
