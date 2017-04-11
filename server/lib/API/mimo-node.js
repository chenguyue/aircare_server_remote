/**
 * mimonode API(JavaScript)
 * @Author: zgwang
 * @Date: 2017.4.11
 */

var io = require('socket.io-client');
var socket = null;

var MimoNode = {};

MimoNode['readAll'] = readAll;

// connect function
function connect(callback){ 

	socket = io.connect("http://10.107.31.156:8886/access"); 
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

module.exports = MimoNode;
