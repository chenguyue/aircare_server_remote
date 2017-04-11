var userInfo = require('../userInfo');

var obj = {
	"userName": "zgwang88",
	"password": "zgwang",
	"email": "zgwang24@163.com",
	"privateKey": "18810802046",
	"publicKey": "18810802046",
	"token": "2046"
};

var callback = function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log(res);
	}
};
userInfo.createUser(obj, callback);
// userInfo.deleteUser("zgwang", callback);
// userInfo.updateUser("zgwang24", obj, callback);
// userInfo.researchUser("zgwang", callback);