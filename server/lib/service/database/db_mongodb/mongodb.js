/**
* mongodb connect
* @Auther: zgwang
* @Date: 2017.4.11
*/

var mongoose = require('mongoose');
var options = {
	db: {
		native_parser: true
	},
	server: {
		poolSize: 200
	},
	replset: {
		rs_name: 'myReplicaSetName'
	}
}

mongoose.connect('mongodb://127.0.0.1/aircare_remote', options);
var db = mongoose.connection;

db.on('error', function(error){
	console.log(error);
});
db.once('open', function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log("The port 8886 is okay");
	}
});

exports = module.exports = mongoose;