const mongoose = require('../db/connection')

const ConSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: String,
  genre: String
})

// give fave true or false thing
const Con = mongoose.model('Con', ConSchema)
module.exports = Con
