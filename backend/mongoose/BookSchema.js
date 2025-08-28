const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String },
  language: { type: String },
  publisher: { type: String },
  edition: { type: String },
  category: { type: String },
  coverName: { type: String },
  bookName: { type: String},
/*   cover: { type: mongoose.Schema.Types.ObjectId }, // GridFS ID for cover
  book: { type: mongoose.Schema.Types.ObjectId },  // GridFS ID for PDF */
  timeEntered: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', BookSchema)
module.exports = Book