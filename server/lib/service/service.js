/**
* service
* @Auther: xufei,zgwang
* Date: 2017.4.11
*/

var messageInfo = require("./database/db_mongodb/messageInfo");

var Service = function(){};

Service.prototype.readAll = function(callback){
	messageInfo.readAll(function(err, res){
		if(err){
			callback(err, res);
		}else{
			callback(err, res);			
		}
	});
}

module.exports = new Service();