const express = require('express')
const bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

// Static files
// needs to be called before the routes in order to work
app.use(express.static('app/public'))
require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

var PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log('App listening on Port ' + PORT)
})
