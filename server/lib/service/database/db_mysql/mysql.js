var MYSQL = require('mysql');
var mysql = MYSQL.createConnection({
	host : '118.89.236.53',
	user : 'root',
	password : '123',
	database : 'aircare',
	port : 3306
})

exports = module.exports = mysql;