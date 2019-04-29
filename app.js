var express = require('express');
var app = express();

// If environment is production, specify port, otherwise use 3000 locally.
var port = process.env.PORT || 3000;

//set up routing for the static files the front-end will need.
app.use('/assets', express.static(__dirname + '/public'));

// server-side (!) view engine.
app.set('view engine', 'ejs');

app.listen(port);


