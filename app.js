// var express = require('express');
// var app = express();


// app.get('/', function(req, res) {
// 	res.send(new Date());
// });

// var server = app.listen(8145, function() {
// 	console.log('Express server listening on port ' + server.address().port);
// });


var express = require('express');
var moment = require('moment');
var app = express();


app.get('/', function(req, res) {
	var now = moment();
	res.send(now.format("HH:mm:ss") );
});

var server = app.listen(8145, function() {
	console.log('Express server listening on port ' + server.address().port);
});