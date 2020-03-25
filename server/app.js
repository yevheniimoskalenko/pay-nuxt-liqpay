const express = require('express')
const bodyParser = require('body-parser')
const payRoutes = require('./routes/pay.Routes')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", payRoutes)
module.exports = app