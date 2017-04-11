/**
* message about sensor
* @Auther: zgwang
* @Date: 2017.4.11
*/

var mongoose = require('./mongodb');
var Schema = mongoose.Schema;
// The schema of data
var messageSchema = new Schema({
	userName: String,
	rootSpace: String,
	subSpace: String,
	type: String,
	value: String,
	time: String,
	location: String
});

var messageInfoModel = mongoose.model('messageinfo', messageSchema);
var MessageInfo = function(){};
var messageInfoInstance = null;

// read all data from mongodb
MessageInfo.prototype.readAll = function(callback){
	messageInfoModel.findOne({}, callback);
};

exports = module.exports = new MessageInfo();