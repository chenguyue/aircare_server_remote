var mysql = require('./mysql.js');
var AC_SENSOR_DATA = 'ac_sensor_data';
var acData = function(){};
var result = new Array();

acData.prototype.readAll = function(callback){
	var sql = "select * from " + AC_SENSOR_DATA;
	var res = mysql.query(sql, function query(err, res){
		if(err){
			console.log(err);
		}else{
			callback(err, res);
		}
	})
}

acData.prototype.readDayAvg = function(day, callback){
	var sql = "select subdate(curdate(), " + day + ") as date, "+
		"subspace, type, avg(value) as value from ac_sensor_data "+
		"where date(time) = subdate(curdate(), " + day + 
		") group by subspace, type"; 
	var res = mysql.query(sql, function query(err, res){
		if(err){
			console.log(err);
		}else{
			callback(err, res);
		}
	});	
}

acData.prototype.readHourAvg = function(day, callback){
	var sql = "select subdate(curdate(), " + day + ") as date, hour(time) as hour, subspace, avg(value) as value " + 
	"from ac_sensor_data where date_format(time, '%Y-%m-%d')" + 
	" = subdate(curdate(), " + day + ") group by hour(time), subspace;";
	var res = mysql.query(sql, function query(err, res){
		if(err){
			console.log(err);
		}else{
			callback(err, res);
		}
	});	
}
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


function readOneDayAvg(day, callback){
	var init = -2;
	var data = {};
	var message = new Array();
	var sql = "select subdate(curdate(),"+(init+2+day)+") as time, subspace, round(avg(value),1) as val from "+ AC_SENSOR_DATA 
			+" where time>=date_sub(subdate(curdate(),"+(init+1+day)+"), interval 1 day)"
			+ "and time <= date_sub(subdate(curdate(),"+(init+day)+"), interval 1 day)"
			+"group by subspace";
	var result = mysql.query(sql, function query(err, result){
		if(err){
			console.log(err);
		}else{
			console.log("read avg data one day successfully");
			/*for(i = 0; i<result.length; i++){
				data.subspace = result[i].subspace;
				data.value = result.round(avg(value),1);
				data.time = result.subdate(curdate(),0)
				message.push(data);

			}*/
			callback(err, result);
		}
	});
}
acData.prototype.readSevenDayAvg = function(callback){
	for(i = 0; i<7; i++){
		readOneDayAvg(i, function(err, res){
			if(err){
				callback(err);
			}else{
				// callback(err, res);
				for(var i = 0; i < res.length; i++){
					result.push(res[i]);
				}
				// console.log(result.length);			
			}
		});
	}
	console.log(result.length+"hjklp;");
	//callback(err, result);	
}
acData.prototype.readOneHourAvg = function(callback){
	var sql = "select time, subspace, round(avg(value),1) from "
			+AC_SENSOR_DATA+ " where extract(year from time)=extract(year from now(6))"
			+" and extract(month from time)=extract(month from now(6))" 
			+" and extract(day from time)=extract(day from now(6))"
			+" and extract(hour from time)=extract(hour from now(6))-1"
			+" group by subspace";
	console.log(sql);
	var result = mysql.query(sql, function query(err, result){
		if(err){
			console.log(err);
		}else{
			console.log("read avg data one hour successfully");
			console.log(result);
			callback(err, result);
		}
	});
}

acData.prototype.readTwentyFourHour = function(callback){
	var result = new Array();
	var data = {};
	var oneDay = {};
	for(i = 0; i<24; i++){
		readOneHourAvg(i, function(err, res){
			if(err){
				callback(err);
			}else{
				callback(err, res);
				for(i = 0; i < res.length; i++){
					oneDay.subspace = res[i].subspace;
					oneDay.value = res[i].round(avg(value),1);
					console.log(oneDay);
					//oneDay.time = res[i].subdate(curdate(),6);
				}
				result.push(res);			
			}
		});
	}
	callback(null, result);	
}
exports = module.exports = new acData();