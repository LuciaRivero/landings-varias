var express = require('express');
var https = require('https');
var app = express();

app.use('/lib', express.static(__dirname + '/node_modules'))
app.use('/public', express.static(__dirname + '/public'))
app.get('/', function (req, res) {
	console.log(req.query);
  	res.sendFile(__dirname + '/public/index.html');
});








app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});