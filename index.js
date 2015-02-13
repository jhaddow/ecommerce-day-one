"use strict";

var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');

var port = 9901;
var mongoUri = "mongodb://localhost/ecommerce";
var app = Express();

Mongoose.connect(mongoUri);
var connection = Mongoose.connection
connection.once('open', function(){
	console.log('connected to db at ' + mongoUri);
});
connection.on('error', function() {
	console.log('error connecting to ' + mongoUri);
})

app.listen(port, function(){
	console.log('listening on port ' + port);
})