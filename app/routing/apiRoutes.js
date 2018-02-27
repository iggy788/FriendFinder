// Import friend data.
var friendData = require('../data/friends.js');
module.exports = function (app) {
    // GET route for /api/friends returns friendData.
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    // POST route for /api/friends takes in the new data and responds with the most compatible match.
    app.post('/api/friends', function (req, res) {
        // Our user is the data sent in the request.
        var thisUser = req.body;
        console.log(thisUser);
        console.log(friendData);
        var differences = [];

        // If there is more than one friend to compare to,
        if (friendData.length > 3) {
            // Step through these potential friends.
            friendData.forEach(function (user) {
                var totalDifference = 0;
                console.log('Mikes Scores: ' + friendData[0].scores);
                console.log('Arnolds Scores: ' + friendData[1].scores);
                console.log('Jordans Scores: ' + friendData[2].scores);
                // console.log(friendData[i]);
                // For each answer, compare the answers and add the absolute value of the difference to the total difference.
                for (var i = 0; i < thisUser.scores.length; i++) {
                    var otherScore = user.scores[i];
                    // console.log('otherScore: ' + otherScore);
                    var thisScore = thisUser.scores[i];
                    // console.log('thisScore: ' + thisScore);
                    var difference = +otherScore - +thisScore;
                    // console.log('difference: '+ difference);
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });

            // Find the minimum difference score.
            var minimumDifference = Math.min.apply(null, differences);
            console.log('minimumDifference: ' + minimumDifference);

            // Since there may be more than one potential friend with that score, create an array.
            var bestMatches = [];

            // For each item in differences, if it is equal to the minimumDifference, add the corresponding friendData to the bestMatches array.
            for (var i = 0; i < differences.length; i++) {
                if (differences[i] === minimumDifference) {
                    bestMatches.push(friendData[i]);
                }
            }

            // Then send bestMatches to the client.
            // console.log(bestMatches);
            res.json(bestMatches);
            // If there is only one friend to compare to, skip all that work and just send back that friend.
        } else {
            // console.log(friendData);
            res.json(friendData);
        }

        // Once you're done comparing, add the new user to the potential friends data.
        friendData.push(thisUser);
    });
};