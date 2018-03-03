const mongoose = require('../db/connection')

const BookmarkSchema = new mongoose.Schema({
  title: String,
  description: {
    type: String,
    required: true
  },
  url: String
})

const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

module.exports = Bookmark
