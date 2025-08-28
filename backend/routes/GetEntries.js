const express = require('express')
const Book = require('../mongoose/BookSchema')
const router = express.Router()

const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'uploadCovers')

router.get("/getBooks", async(req, res)=>{

    const booksMetaData = await Book.find()
    
    res.status(201).json(booksMetaData)

})

module.exports = router