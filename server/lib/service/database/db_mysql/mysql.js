var MYSQL = require('mysql');
var AIRCARE = 'aircare';
var mysql = MYSQL.createConnection({
	host : '118.89.236.53',
	user : 'root',
	password : '123',
	database : 'aircare',
	port : 3306
})
mysql.connect(callback);
mysql.query("use " + AIRCARE);
function callback(err){
	if(err){
		console.log("mysql unconnected");
	}else{
		console.log("mysql connected");
	}
}
exports = module.exports = mysql;