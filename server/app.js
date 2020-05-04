const express = require('express')
const bodyParser = require('body-parser')
const payRoutes = require('./routes/pay.Routes')
const mongose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({
  extended: true
}))
mongose.connect("mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(`connect has started..`))
app.use(bodyParser.json())

app.use("/api", payRoutes)
module.exports = app
