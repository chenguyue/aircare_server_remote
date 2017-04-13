/**
* service
* @Auther: xufei,zgwang
* Date: 2017.4.11
*/

var acData = require("./database/db_mysql/ac_data");

var Service = function(){};

Service.prototype.readByUserName = function(userName, callback){
	acData.readData(userName, function(err, res){
		if(err){
			callback(err);
		}else{
			callback(err, res);			
		}
	});
}
Service.prototype.readBySensor = function(sensor, callback){
	acData.readSensor(sensor, function(err, res){
		if(err){
			callback(err);
		}else{
			callback(err, res);			
		}
	});
}
Service.prototype.readAll = function(callback){
	acData.readAll(function(err, res){
		if(err){
			callback(err);
		}else{
			callback(err, res);			
		}
	});
}
module.exports = new Service();