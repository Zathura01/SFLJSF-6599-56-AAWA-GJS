const express = require('express')
const Book = require('../mongoose/BookSchema')
const router = express.Router()

router.post('/', async (req, res) => {
  const str = req.body.search?.toLowerCase() || ""; // safe lowercase search

  try {
    const data = await Book.find();
    const response = [];

    for (let element of data) {
      if (
        element.title.toLowerCase().includes(str) ||
        element.author.toLowerCase().includes(str)
      ) {
        response.push(element);
      }
    }
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router

/* [
  {
    _id: new ObjectId('68abe3e956b2b73fc5db9728'),
    title: 'asf',
    author: 'asf',
    isbn: '234',
    language: 'asf',
    publisher: 'adf',
    edition: 'af',
    category: 'Technology',
    timeEntered: 2025-08-25T04:17:45.720Z,
    __v: 0
  },
  {
    _id: new ObjectId('68abe59f56b2b73fc5db972b'),
    title: 'asdf',
    author: 'asfasdf',
    isbn: '23',
    language: 'asdfasfd',
    publisher: 'asdf',
    edition: 'asdf',
    category: 'Children',
    timeEntered: 2025-08-25T04:25:03.301Z,
    __v: 0
  },
  {
    _id: new ObjectId('68abefbf1f281f4f653c3514'),
    title: 'asdf',
    author: 'sdf',
    isbn: '24',
    language: 'dsf',
    publisher: 'sfd',
    edition: 'asdf',
    category: 'Non-Fiction',
    timeEntered: 2025-08-25T05:08:15.561Z,
    __v: 0
  }
] */