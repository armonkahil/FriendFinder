var friends = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends', function (req, res) {
   console.log(req.body)
    var newMatch = req.body
    console.log('new match ', newMatch)
    res.json(newMatch)
  })
}
