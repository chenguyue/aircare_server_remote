var mysql = require('./mysql.js');
var AC_SENSOR_DATA = 'ac_sensor_data';
var acData = function(){};

acData.prototype.readData = function(userName, callback){
	var sql = "select * from "+ AC_SENSOR_DATA +
	" where username=\'"+userName+"\' order by time asc limit 0,6";
	var result = mysql.query(sql, function query(err, result){
		if(err){
			console.log(err);
		}else{
			console.log("read successfully");
			console.log(result);
			callback(err, result);
		}
	});
}

acData.prototype.readSensor = function(sensor, callback){
	var sql = "select * from "+ AC_SENSOR_DATA + " where subspace=" 
	+ "\'"+sensor+"\'";
	var result = mysql.query(sql, function query(err, result){
		if(err){
			console.log(err);
		}else{
			console.log("read successfully");
			console.log(result);
			callback(err, result);
		}
	});	
}

acData.prototype.readAll = function(callback){
	var sql = "select * from "+ AC_SENSOR_DATA;
	var result = mysql.query(sql, function query(err, result){
		if(err){
			console.log(err);
		}else{
			console.log("read successfully");
			console.log(result);
			callback(err, result);
		}
	});
}

exports = module.exports = new acData();