const https = require('https');
function nodecat(){
	this.send = function(target, message){
		this.target = target;
		this.message = message;
		var postData = 'addressees='+target+'&question='+message;
		var options = {
  			hostname: 'curiouscat.me',
  			port: 443,
  			path: '/api/v2/post/create',
  			method: 'POST',
  			headers: {
       			'Content-Type': 'application/x-www-form-urlencoded',
       			'Content-Length': postData.length
     		}
	};

var req = https.request(options);
req.write(postData);
req.on('error', (e) => {
  console.error(e);
});
req.end();
}
}

module.exports = nodecat;
