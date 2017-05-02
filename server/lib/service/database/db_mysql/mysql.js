var MYSQL = require('mysql');
var AIRCARE = 'aircare';
var mysql = MYSQL.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : '123456',
	database : 'aircare',
	port : 3306
})
mysql.connect(callback);
mysql.query("use " + AIRCARE);
function callback(err){
	if(err){
		console.log("mysql unconnected");
	}else{
		console.log("mysql connected and port 8886 is open.");
	}
}
exports = module.exports = mysql;