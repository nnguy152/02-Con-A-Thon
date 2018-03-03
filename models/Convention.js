const mongoose = require('../db/connection')

const AnimeConSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: String,
  url: String
})

const AnimeCon = mongoose.model('Con', AnimeConSchema)

module.exports = AnimeCon
