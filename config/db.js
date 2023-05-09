const mongoose = require('mongoose')
const express = require('express')
const app = express()

//const URI = "mongodb+srv://<username>:<pass>@<db name>.p9vxhp1.mongodb.net/cartDb?retryWrites=true&w=majority"

const URI = "mongodb+srv://<username>:<pass>@<db name>.p9vxhp1.mongodb.net/cartDb?retryWrites=true&w=majority"

// listen for request
const connection = mongoose.connect(URI)
   .then((result) => {
      app.listen(5000)
      console.log('Connected')
   })
   .catch((err) => console.log(err))

module.exports = mongoose