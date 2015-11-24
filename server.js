var express = require('express'),
		PORT    = process.env.PORT || 3000,
		dotenv	= require('dotenv'),
		server  = express();

dotenv.load();

//render public directory
server.use(express.static('./public'));






//run server
server.listen(PORT, function(){
	console.log(process.env.EN_AK)
	console.log(process.env.EN_CK)
	console.log(process.env.EN_SS)
	console.log('listening on port ' + PORT)
});