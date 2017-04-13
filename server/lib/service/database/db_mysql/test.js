var acData = require('./ac_data');

function callback(err, res){
	if(err){
		console.log(err);
	}else{
		console.log(res);
	}
}

//acData.readData("qinjie", callback);
acData.readSensor("sensor2", callback);