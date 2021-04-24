const db = require("../models");
const Omax = db.omaxs;
const Shift = db.shifts;

const cron = require('node-cron');


cron.schedule('5 12 * * *', function(fireDate) {

	startShift('Omax 4').catch(e => {console.log(e)});
	console.log('New shift started at ... ' + fireDate)

})

cron.schedule('6 12 * * *', function(fireDate) {
	endShift('Omax 4').catch(e => console.log(e));
	console.log('Shift ended at ' + fireDate);
})

/*
cron.schedule('0/15 12-20 * * *', function() {

	newUptimeLog('Omax 4').catch(e => console.log(e));


});
*/

newUptimeLog = async (omaxName) => {

	var condition = omaxName ? {omaxName: {$regex: new RegExp(omaxName), $options: "i"} } : {};;
	
	omax = await Omax.findOne(condition);


	
	shift = await Shift.findOne({ "omax" : omax._id, "currentShift" : "true"});

	shift.uptimeLogs.push(omax.totalRuntime);
	shift.save();

	
	console.log('Logs: ' + shift.uptimeLogs)

	

	
	

}



startShift = async (omaxName) => {

	var condition = omaxName ? {omaxName: {$regex: new RegExp(omaxName), $options: "i"} } : {};;

	let omax = await Omax.findOne(condition);


	const shift = await new Shift({

		omax: omax._id,
		uptimeLogs: [],
		shiftStartTimer: omax.totalRuntime,
		shiftEndTimer: 0,
		avgShiftUptime: 0,
		currentShift: "true"

	});

	 shift.save().catch(e => console.log(e + " on saving shift"))
	 omax.shifts.unshift(shift);
	 omax.save();


}

endShift = async (omaxName) => {

	var condition = omaxName ? {omaxName: {$regex: new RegExp(omaxName), $options: "i"} } : {};;

	let omax = await Omax.findOne(condition);

	let shift = await Shift.findOne({"omax" : omax._id});

	shift.shiftEndTimer = omax.totalRuntime;
	shift.currentShift = "false";
	shift.save();

}
