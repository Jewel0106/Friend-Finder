var path = require("path");
var friends = require("../data/friends.js");
var express = require("express");

module.exports = function(app) {

	//Used to display a friends.js
	app.get("/api/friends", function(req, res) {

	    res.json(friends);

	});

	app.post("/api/friends", function(req, res){
				var newFriend = req.body;

		for(var i = 0; i < newFriend.scores.length; i++) {
			if(newFriend.scores[i] == "1") {
				newFriend.scores[i] = 1;
			} else if(newFriend.scores[i] == "5") {
				newFriend.scores[i] = 5;
			} else {
				newFriend.scores[i] = parseInt(newFriend.scores[i]);
			}
		}

		var differencesArray = [];


		for(var i = 0; i < friends.length; i++) {

			var comparedFriend = friends[i];
			var totalDifference = 0;
			
			for(var k = 0; k < comparedFriend.scores.length; k++) {
				var differenceOneScore = Math.abs(comparedFriend.scores[k] - newFriend.scores[k]);
				totalDifference += differenceOneScore;
			}

			differencesArray[i] = totalDifference;
		}

		var bestFriendNum = differencesArray[0];
		var bestFriendIndex = 0;

		for(var i = 1; i < differencesArray.length; i++) {
			if(differencesArray[i] < bestFriendNum) {
				bestFriendNum = differencesArray[i];
				bestFriendIndex = i;
			}
		}

		friends.push(newFriend);

		res.json(friends[bestFriendIndex]);

	});
};

