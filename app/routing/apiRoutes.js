var data = require("../data/data");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(data);
  });

  app.post("/api/friends", function(req, res) {
    //The code here should handle incoming survey results.
    //This route should also handle the compatibility logic.
    //Each user's results need to be converted into an array of numbers.
    //Then the current user's scores are compared to the scores of other users per question.
    //The differences of each score per question is added up to equal the "totalDifference".
    //Need to use absolute value of the differences. Differences cannot be negative.
    //The closest match will be the user with the least differences, or the lowest "totalDifference".
    //The name and picture of the closest match will then be the result that needs to show up in the modal in "survey.html".
  });

  //The application's data needs to be saved inside of "app/data/friend.js" as an array of objects
  //I am not sure if that is done in this file.

  app.post("/api/clear", function(req, res) {
    data.length = 0;

    res.json({ ok: true });
  });
};
