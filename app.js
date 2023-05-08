const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')

const cartRouter = require('./routes/cartRoutes')

const app = express()

app.use(cors())
app.use(bodyparser.json())
app.use(express.urlencoded({
    extended: true
}
))

app.use('/',cartRouter)//all routes will be handled from cartrouter

module.exports = app