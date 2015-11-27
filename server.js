var express = require('express'),
		PORT    = process.env.PORT || 3000,
		dotenv	= require('dotenv'),
		request = require('request'),
		server  = express();

dotenv.load();

//render public directory


server.use('/bower_components', express.static('./bower_components'));

server.use(express.static(__dirname + '/public'));

//This gets artist data
server.get('/explore/:artist', function(req, res){
	var ARTIST = req.params.artist;
	request('http://developer.echonest.com/api/v4/artist/profile?api_key=' + process.env.EN_AK + '&name=' + ARTIST + '&bucket=biographies&bucket=blogs&bucket=images', function(err, res, bod){
		console.log(bod)
	})
})

//This delegates all front-end routing to angular
server.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/' + 'index.html'); // load our public/index.html file
});

//run server
server.listen(PORT, function(){
	console.log('listening on port ' + PORT)
});
