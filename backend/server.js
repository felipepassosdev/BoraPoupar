const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// STARTING APP
const app = express()

// send data in JSON format
app.use(express.json())

// STARTING BD
mongoose.connect(
    'mongodb://localhost:27017/backend-borapoupar',
    { useNewUrlParser: true }
)
requireDir('./src/models/')

// WILD CARD - Receive GET / POST / PUT / DELETE, Whatever
app.use('/api', require('./src/routes'))

// LISTENING APP
app.listen(3001)