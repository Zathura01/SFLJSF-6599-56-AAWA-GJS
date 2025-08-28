const express = require('express')
const router = express.Router()
const Book = require('../mongoose/BookSchema')


router.get("/bookid/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    console.log(book)
    res.json(book);
  } catch (err) {
    res.status(500).send("Error fetching book");
  }
});


module.exports = router