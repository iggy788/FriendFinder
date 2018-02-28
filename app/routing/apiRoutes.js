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
        console.log('thisUser ******************************');
        console.log(thisUser);
        // console.log(friendData);
        var differences = [];

        if (friendData.length > 1) {

            friendData.forEach(function (thisUser) {
                var totalDifference = 0;
                console.log('friendData ******************************');
                console.log(friendData);

                for (var i = 0; i < thisUser.scores.length; i++) {
                    var otherScore = friendData[i].scores;
                    console.log('otherScore ******************************')
                    console.log(otherScore);
                    var thisScore = thisUser.scores;
                    console.log('thisScore ******************************');
                    console.log(thisScore);
                    // THIS NEEDS TO BE FIXED
                    var difference = parseInt(otherScore) - parseInt(thisScore);
                    console.log('difference ******************************');
                    console.log(difference);
                    totalDifference += Math.abs(difference);
                }

                differences.push(totalDifference);
            });


            // Find the minimum difference score.
            var minimumDifference = Math.min.apply(null, differences);
            console.log('minimumDifference: ' + minimumDifference);

            // Since there may be more than one potential friend with that score, create an array.
            var bestMatches = [];
            console.log('bestMatches ******************************');
            console.log(bestMatches);

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