const mongoose = require('../db/connection')

const ConSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String
    // required: true
  },
  date: {
    type: String
    // required: true
  },
  description: String,
  url: String,
  genre: String
})

const Con = mongoose.model('Con', ConSchema)
module.exports = Con
