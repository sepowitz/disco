var express = require('express'),
		PORT    = process.env.PORT || 3000,
		dotenv	= require('dotenv'),
		server  = express();

dotenv.load();

//render public directory
server.use('/bower_components', express.static('./bower_components'));

// Here's the new code:
server.use(express.static(__dirname + '/public'));


//This delegates all front-end routing to angular
server.get('*', function(req, res) {
            res.sendFile(__dirname + '/public/' + 'index.html'); // load our public/index.html file
        });

//run server
server.listen(PORT, function(){
	console.log('listening on port ' + PORT)
});



/*

//API KEY
EN_AK = C1WGDIOXYOUYDDOK0 

//Consumer Key
EN_CK = 0640ef95e11d3175a202997b2c67a030 

//Shared Secret
EN_SS = vmcTdmuATougAVY8TCWt3w

*/
