var express = require ("express");
var app = express ();

app.get('/', function(req, res){
	res.send('/landing/landing.html');
});

var server = app.listen(3000, function(){
	cosole.log('Listening on port 3000');
});