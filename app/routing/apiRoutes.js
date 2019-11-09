var friends = require('../data/friends.js')

module.exports = function (app) {
  // Get route to display a JSON of all friends
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })
  // Post route to handle incoming survey results
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
      console.log('total difference: ', totalDifference)
    }
    matchSearch = Math.min.apply(Math, matchMaking)
    matchFound = matchMaking.indexOf(matchSearch)
    friends.push(newMatch)
    res.json(friends[matchFound])
  })
}
