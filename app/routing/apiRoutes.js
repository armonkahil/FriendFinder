var friends = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends', function (req, res) {
    var newMatch = req.body
    var matchMaking = []
    var totalDifference = 0
    var matchSearch = 0
    var matchFound = 0
    for (let i = 0; i < friends.length; i++) {
      totalDifference = 0
      for (let j = 0; j < friends[i].scores.length; j++) {
        friends[i].scores[j] = parseInt(friends[i].scores[j])
        newMatch.scores[j] = parseInt(newMatch.scores[j])
        totalDifference += Math.abs(friends[i].scores[j] - newMatch.scores[j])
      }
      matchMaking.push(totalDifference)
    }
    matchSearch = Math.max.apply(Math, matchMaking)
    matchFound = matchMaking.indexOf(matchSearch)
    friends.push(newMatch)
    res.json(friends[matchFound])
  })
}
