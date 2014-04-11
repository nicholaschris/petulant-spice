// server.js

// Set up
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port     = process.env.PORT || 8080;        // set the port
var database = require('./config/database');      // load the database config

// configuration
mongoose.connect(database.url); 

app.configure(function() {
    app.use(express.static(__dirname + '/public'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

});

// load the routes
require('./app/routes')(app);

app.listen(port);
console.log("App listening on port " + port)