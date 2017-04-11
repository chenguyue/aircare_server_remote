/**
* 登录、注册、订阅、发布等功能的对外API	
* @Auther: xufei,zgwang
* @Date: 2016.5.16
*/

var service = require("./lib/service/service");

function work(io){
	sSocket = io;
	sSocket && (function() {
		sSocket.of("/access").on('connection', function(cSocket) {
			console.log("connect success");
			var authTimer = setTimeout(function() {
				cSocket.disconnect();
				console.log(cSocket.id + " is time out");
			}, 10000);	

			cSocket.on('readAll', function(data) {
				clearTimeout(authTimer);
				service.readAll(function(err, res) {					
					var socketConnect = sSocket.of('/access').connected[cSocket.id];
					if(err){
						socketConnect && socketConnect.emit('readAllFailed', res);
						cSocket.disconnect();
					}else{
						socketConnect && socketConnect.emit('readAllSucceed', res);						
					}
				});
			});			
		});
	})();
};

module.exports = exports = work;