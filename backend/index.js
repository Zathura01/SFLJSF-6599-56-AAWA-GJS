const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('./services/Connection')
const port = 2500
const app = express()
const path = require('path')

app.use(cors())
app.use(express.json())



app.use('/book', require('../backend/routes/NewEntries'))
app.use('/book', require('../backend/routes/GetEntries'))
app.use('/bookresult', require('../backend/routes/Bookresult'))
app.use('/ob', require('../backend/routes/Openbook'))
app.use('/getcover', express.static(path.join(__dirname, 'services', 'uploadCovers')));
app.use('/getbook', express.static(path.join(__dirname, 'services', 'uploadBooks')));
app.use('/openbook', require('../backend/routes/Openbook'))



app.listen(port, ()=>{
    console.log("Server running on port: ", port)
})