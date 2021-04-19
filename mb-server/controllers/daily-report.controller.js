

const db = require("../models");
const Report = db.reports;
const Omax = db.omaxs;

const omaxapi = require("../omaxapi");


// DAILY REPORT LOOP

var now = new Date();

var msTillTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12,0,0,0) - now;
if(msTillTime < 0) {
	msTillTime += 8640000;
}


makeDailyReports = async () => {
	await createDailyTimerReport("Omax 1");
	await createDailyTimerReport("Omax 2");
	await createDailyTimerReport("Omax 3");
	console.log("New DRs generated");
}

setTimeout(makeDailyReports, msTillTime)



createDailyTimerReport = async (omaxName) => {

	var condition = omaxName ? {omaxName: {$regex: new RegExp(omaxName), $options: "i"} } : {};;

	let omax = await Omax.findOne(condition);


	const report = await new Report({

		omax: omax._id,
		omaxName: omax.omaxName,
		reportType: "Daily Timer",
		reportValue: omax.totalRuntime,
		reportAuthor: "Daily report controller"
	});

	
	report.save().catch(e => console.log(e));
	omax.reports.unshift(report);
	omax.save();
	

};


exports.findAll = (req, res) => {
	const name = req.query.omaxName;
	var condition = name ? {name: {$regex: new RegExp(name), $options: "i" } } : {};
	
	Report.find(condition)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Could not find reports"
			});
		});
};






exports.deleteAll = (req, res) => {
	Report.deleteMany({})
		.then(data => {
			res.send({
				message: "All reports have been deleted"
			});
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Could not deled the logs"
			})
		});

};
