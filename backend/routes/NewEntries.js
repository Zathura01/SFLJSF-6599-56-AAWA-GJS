const express = require('express')
const Book = require('../mongoose/BookSchema')
const router = express.Router()
const upload = require('../services/MulterSetup')


router.post('/newBook', upload.fields(
    [
        { name: 'cover', maxCount: 1},
        { name: 'book', maxCount: 1}
    ]
),async (req, res) => {
    const { title, author, isbn, language, publisher, edition, category } = req.body;
  // Access files
  const coverFile = req.files['cover'] ? req.files['cover'][0].filename : null;
  const bookFile = req.files['book'] ? req.files['book'][0].filename : null;

  // Build URLs if you are serving static files
  const coverUrl = coverFile ? `http://localhost:2500/getcover/${coverFile}` : null;
  const bookUrl = bookFile ? `http://localhost:2500/getbook/${bookFile}` : null;
    const newBook = new Book({ title, author, isbn, language, publisher, edition, category, coverName: coverUrl, bookName: bookUrl });
    await newBook.save();
    res.status(201).json({ msg: "Done" });
});



module.exports = router