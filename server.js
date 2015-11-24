var express = require('express'),
		PORT    = process.env.PORT || 3000,
		dotenv	= require('dotenv'),
		server  = express();

dotenv.load();

//render public directory
server.use(express.static('./public'));
server.use('/bower_components', express.static('./bower_components'));





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
