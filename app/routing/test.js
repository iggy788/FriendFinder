// function maxStr(str) {
//     function sumWord(word) {
//         var sum = 0;
//         for (var i = 0; i < word.length; i++) {
//             sum += word.charCodeAt(i) - 96;
//         }
//         return sum;
//     }
//     var wordArr = str.split(" ");
//     var sum;
//     var highStr = wordArr.reduce(function(a, b) {
//         return sumWord(a) >= sumWord(b) ? a : b;
//     })
//     return highStr;
// }

// for (var si = 0; i < thisUser.scores.length; i++)
// // For each answer, compare the answers and add the absolute value of the difference to the total difference.


//     console.log('friendData ******************************');
//     console.log(friendData);

//     var otherScore = friendData[i].scores;
//     console.log('otherScore ******************************')
//     console.log(otherScore);

//     var thisScore = thisUser.scores;
//     console.log('thisScore ******************************');
//     console.log(thisScore);

//     // THIS NEEDS TO BE FIXED
//     var difference = parseInt(otherScore) - parseInt(thisScore);
//     console.log('difference ******************************');
//     console.log(difference);

//     console.log('totalDifference ******************************');
//     console.log(totalDifference);
//     totalDifference += Math.abs(difference);
//     console.log('Math ******************************');
//     console.log((totalDifference += Math.abs(difference)));
//     differences.push(totalDifference);
//     console.log('differences ******************************');
//     console.log(differences);
// }