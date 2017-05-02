/**
* service
* @Auther: zgwang
* Date: 2017.05.02
*/

var acData = require("./database/db_mysql/ac_data");

var Service = function(){};

Service.prototype.readAll = function(callback){
	acData.readAll(function(err, res){
		if(err){
			callback(err);
		}else{
			callback(err, res);			
		}
	});
}

Service.prototype.readHourAvg = function(day, callback){
	acData.readHourAvg(day, function(err, res){
		if(err){
			callback(err);
		}else{
			callback(err, res);
		}
	});
}

Service.prototype.readDayAvg = function(day, callback){
	acData.readDayAvg(day, function(err, res){
		if(err){
			callback(err);
		}else{
			callback(err, res);
		}
	});
}

module.exports = new Service();