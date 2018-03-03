const mongoose = require('../db/connection')

const ConSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: String,
  url: String,
  genre: String
})

const Con = mongoose.model('Con', ConSchema)

module.exports = Con
