const express = require('express')
const bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())

require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

var PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('App listening on Port ' + PORT)
})
