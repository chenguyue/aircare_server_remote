/**
 * mimonode API(JavaScript)
 * @Author: zgwang
 * @Date: 2017.4.11
 */

var io = require('socket.io-client');
var socket = null;

var MimoNode = {};

MimoNode['readAll'] = readAll;
MimoNode['readHourAvg'] = readHourAvg;
MimoNode['readDayAvg'] = readDayAvg;
MimoNode['readSevenDayAvg'] = readSevenDayAvg;
// connect function
function connect(callback){ 

	socket = io.connect("http://10.107.31.156:8886/access"); //http://118.89.236.53:8886/access
	socket.on('connection',function(){
		callback.connectCallback();
	});
	socket.on('disconnect',function(){
		callback.disconnectCallback();
	});
	socket.on('error',function(object){
		callback.socketErrorCallback(object);
	});
	socket.connect();
}
function readAll(callback){
	connect(callback);
	
	var data = "readAll";

	socket.emit("readAll", data);
	socket.on("readAllSucceed", function(object){
		callback.successCallback(object);
	});
	socket.on("readAllFailed", function(object){
		callback.errorCallback(object);
	});
};
// zgwang
function readHourAvg(day, callback){
	connect(callback);
	socket.emit("readHourAvg", day);
	socket.on("readHourAvgSucceed", function(object){
		callback.successCallback(object);
	});
	socket.on("readHourAvgFailed", function(object){
		callback.errorCallback(object);
	})
}
// zgwang
function readDayAvg(day, callback){
	connect(callback);
	socket.emit("readDayAvg", day);
	socket.on("readDayAvgSucceed", function(object){
		callback.successCallback(object);
	});
	socket.on("readDayAvgFailed", function(object){
		callback.errorCallback(object);
	})
}
function readSevenDayAvg(callback){
	connect(callback);
	
	var data = "readSevenDaysAvgSucceed";

	socket.emit("readSevenDayAvg", data);
	socket.on("readAllSucceed", function(object){
		callback.successCallback(object);
	});
	socket.on("readSevenDayAvgsFailed", function(object){
		callback.errorCallback(object);
	});
};

module.exports = MimoNode;
