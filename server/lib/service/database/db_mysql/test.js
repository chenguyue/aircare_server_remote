var acData = require('./ac_data');

function callback(err, res){
	if(err){
		console.log(err);
	}else{
		console.log(res);
	}
}
acData.readAll(callback);
//acData.readData("qinjie", callback);
//acData.readSensor("sensor2", callback);
// acData.readSevenDayAvg(callback);
// acData.readOneHourAvg(callback);
// acData.readDayAvg(0, callback);
// acData.readHourAvg(0, callback);