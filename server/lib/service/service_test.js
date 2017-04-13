var Service = require("./service");

/*数据库模型
userObj = {
	userName: String,
	rootspace: String,
	subspace: String,
	type: String,
	value: String,
	location: String
}*/


var callback = function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log(res);
		console.log("ok")
	}
};


//Service.readByUserName("qinjie", callback);