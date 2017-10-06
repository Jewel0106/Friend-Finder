var path = require("path");

var friends = require("../data/friends.js");

module.exports = function(app) {

//Used to display a friends.js
app.get("/api/friends", function(req, res) {

    res.json(friends);

});


// used to handle incoming survey results. This route will also be used to handle the compatibility logic. 
app.post("/api/friends", function(req, res) {
    friends.push(req.body);
});

};