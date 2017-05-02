/**
* work
* @Auther: zgwang
* @Date: 2017.05.02
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
						console.log(res)
						socketConnect && socketConnect.emit('readAllSucceed', res);						
					}
				});
			});	
			cSocket.on('readHourAvg', function(day) {
				clearTimeout(authTimer);
				service.readHourAvg(day, function(err, res) {					
					var socketConnect = sSocket.of('/access').connected[cSocket.id];
					if(err){
						socketConnect && socketConnect.emit('readHourAvgFailed', res);
						cSocket.disconnect();
					}else{
						console.log(res)
						socketConnect && socketConnect.emit('readHourAvgSucceed', res);						
					}
				});
			});	
			cSocket.on('readDayAvg', function(day) {
				clearTimeout(authTimer);
				service.readDayAvg(day, function(err, res) {					
					var socketConnect = sSocket.of('/access').connected[cSocket.id];
					if(err){
						socketConnect && socketConnect.emit('readDayAvgFailed', res);
						cSocket.disconnect();
					}else{
						console.log(res)
						socketConnect && socketConnect.emit('readDayAvgSucceed', res);						
					}
				});
			});		
		});
	})();
};

module.exports = exports = work;