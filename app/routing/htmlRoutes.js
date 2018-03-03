var path = require('path');

module.exports = function(app) {
  // GET route for /survey returns survey.html.
  app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  //GET route for / returns home.html.
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
};