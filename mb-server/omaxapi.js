const db = require("./models");
const { on } = require("events");

const Omax = db.omaxs;

omaxTimers = setInterval(() => {
	updateTimer('OmaxOne', '192.168.50.155').catch(e => console.log(e));
	updateTimer('OmaxTwo', '192.168.50.244').catch(e => console.log(e));
	updateTimer('OmaxThree', '192.168.50.127').catch(e => console.log(e));
	//updateTimer('OmaxFour', '192.168.50.202').catch(e => console.log(e));
	//console.log('tick');
}, 1000 )

exports.getCurrentTime = async function(ip) {

		let url = 'http://' + ip + '/api/hourmeter/1/getcount';
		let apiTimer = await fetch(url, 
			{
				method: 'GET',
				responseType: 'text' 
			})
	
		timer = await apiTimer.text();
	
		cleanTimer = timer.replace(/\D/g, '');

		intTimer = parseInt(cleanTimer);

		//console.log('New sync call ' + intTimer + ' from: ' + ip)

		return intTimer;

		}


updateTimer = async (omaxName, ip) => {
	

		var condition = omaxName ? {omaxName: {$regex: new RegExp(omaxName), $options: "i"} } : {};;
		timer = await this.getCurrentTime(ip).catch(e => console.log(e));
		let doc = await Omax.findOneAndUpdate(condition, {$set: {totalRuntime: timer}}, {useFindAndModify: false})
		
		
	}

