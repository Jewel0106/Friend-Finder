var express = require("express");
var path = require("path");

module.exports = function(app) {

	//Route to Home page
	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	//Route to Survey page
	app.get("/survey", function(req, res) {
	    res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/match", function(req, res){
		res.sendFile(path.join(__dirname, "../public/match.html"));
	});

};