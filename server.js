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
server.get('/explore/:country', function(req, res){
	var COUNTRY = req.params.country;
		//Request artist by country
		request('http://developer.echonest.com/api/v4/artist/search?api_key=' + process.env.EN_AK + '&format=json&artist_location=country:' + COUNTRY + '&bucket=artist_location&bucket=biographies&bucket=blogs&bucket=video&bucket=id:spotify', function(error, response, body){
		//Parse response in order to ensure there wasn't an error
		var parsedRes = JSON.parse(body);
		if(parsedRes.response.artists < 1){
			res.send('Oops, there was a problem')
		} else {
			var ARTIST = (parsedRes.response.artists[Math.floor(Math.random() * parsedRes.response.artists.length)])
			//Make subsequent call for select artists' related tracks
			res.send(ARTIST)
		}
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
