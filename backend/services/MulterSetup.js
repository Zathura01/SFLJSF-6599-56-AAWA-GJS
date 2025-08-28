const express = require('express')
const fs = require('fs')
const path = require('path')


const relpath = path.join(__dirname, 'uploadCovers')
if(!fs.existsSync(relpath)){
    fs.mkdirSync(relpath)
}

const filepath = path.join(__dirname, 'uploadBooks')
if(!fs.existsSync(filepath)){
    fs.mkdirSync(filepath)
}


const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        if(file.fieldname === 'cover'){
            cb(null, relpath)
        }
        if(file.fieldname === 'book' ){
            cb(null, filepath)
        }
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+file.originalname )
    }
})

const upload = multer({ storage: storage })

module.exports = upload;

