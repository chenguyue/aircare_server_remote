var Service = require("./service");

/*数据库模型
userObj = {
	userName: String,
	password: String,
	email: String,
	privateKey: String,
	publicKey: String,
	token: String
}*/
var userObj = {
	"userName": "qinjie",
	"password": "123456",
	"email": "123456@163.com",
	"privateKey": "1000",
	"publicKey": "1000",
	"token": null
};

var subSpaceObj1 = {
	"subSpaceName": "sensor1",
	"spaceType": "null",
	"algorithmType": "null",
	"privacy": "null",
	"secureLevel": "null",
	"defaultPermission": "null",
	"description": "null",
	messages: [],
	"owner": "zgwang",
	pubers:["Thread"],
	subers:[]
};
var subSpaceObj2 = {
	"subSpaceName": "sensor2",
	"spaceType": "null",
	"algorithmType": "null",
	"privacy": "null",
	"secureLevel": "null",
	"defaultPermission": "null",
	"description": "null",
	messages: [],
	"owner": "zgwang",
	pubers:["Thread"],
	subers:[]
};
var subSpaceObj3 = {
	"subSpaceName": "sensor3",
	"spaceType": "null",
	"algorithmType": "null",
	"privacy": "null",
	"secureLevel": "null",
	"defaultPermission": "null",
	"description": "null",
	messages: [],
	"owner": "zgwang",
	pubers:["Thread"],
	subers:[]
};
var rootSpaceObj = {
	"rootSpaceName": "室内",
	"spaceType": "null",
	"algorithmType": "String",
	"privacy": "null",
	"secureLevel": "null",
	"defaultPermission": "null",
	"description": "null",
	messages: [],
	"owner": "zgwang",
	pubers:["zgwang"],
	subers:["zgwang"],
	subSpaces: [subSpaceObj1, subSpaceObj2, subSpaceObj3],
};
var pmObj ={
	"userName":"qinjie94",
	"rootSpace":"inside",
	"subSpace":"sensor3",
	"monitorContent":"pm_25",
	"concentration":"55",
	"monitorTime":"2017-3-14"
};

var callback = function(err, res){
	if(err){
		console.log(err);
	}else{
		console.log(res);
		console.log("ok")
	}
};



// Service.register(userObj, callback);
// Service.verify("qinjie", "123456", callback);
// Service.createRootSpace(rootSpaceObj, callback);
// Service.createSubSpace("室外", subSpaceObj3, callback);
// Service.subscribe("室外", "北京", "zgwang", callback);
// Service.subscribe("室内", "sensor1", "visitor", callback)
// Service.unsubscribe("室外", "北京", "xiaohu", callback);
//Service.insertWeatherInSql(pmObj,callback);
//Service.readWeatherFromSql(callback);
//Service.deleteWeatherFromSql(pmObj,callback)
/*var data = {
	"rootSpaceName": "室外",
	"subSpaceName": "北京"
}
Service.publish(data, callback);*/
// Service.clearSubscribe("室内", "sensor1", callback);
var data = Service.readWeatherFromSql("visitor", callback)
console.log(data);