/**
* mimo-node APIs test(JavaScript)
* @Author: zgwang
* @Date: 2017.4.11
*/
var mimoNode = require('./mimo-node');

mimoNode.readAll(new function(){
	this.successCallback = function(message) {
		console.log("read all data success: " + JSON.stringify(message));
	};
	this.errorCallback = function(message) {
		console.log("read failed: " + message);
	};	
});
