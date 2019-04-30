var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

// If environment is production, specify port, otherwise use 3000 locally.
var port = process.env.PORT || 3000;

//set up routing for the static files the front-end will need.
app.use('/assets', express.static(__dirname + '/public'));

// server-side (!) view engine.
app.set('view engine', 'ejs');

// connect to the mongoDB database using our config file.
mongoose.connect(config.getDbConnectionString());
// call setup controller to seed data.
setupController(app);

app.listen(port);