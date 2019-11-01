var friends = require('../data/friends.js')

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends)
  })

  app.post('/api/friends', function (req, res) {
    console.log(req.body)
    var newMatch = req.body
    var matchMaking = []
    var totalDifference = 0
    var matchSearch = 0
    var matchFound = 0
    // convert the user arrays to values
    for (let i = 0; i < friends.length; i++) {
      for (let j = 0; j < friends[i].scores.length; j++) {
        friends[i].scores[j] = parseInt(friends[i].scores[j])
        totalDifference += Math.abs(friends[i].scores[j] - newMatch.scores[j])
      }
      matchMaking.push(totalDifference)
    }
    matchSearch = Math.max(matchMaking)
    console.log('Match Search ', matchSearch)
    matchFound = matchMaking.indexOf(matchSearch)
    console.log('Match Found ', matchFound)

    console.log('your match is ', friends[matchFound])
    res.json(friends[matchFound])
  })
}
