

const db = require("../models");
const Report = db.reports;
const Omax = db.omaxs;

const cron = require('node-cron');




// DAILY REPORT LOOP

function generateDailyReports() {
	createDailyTimerReport("Omax 1");
	createDailyTimerReport("Omax 2");
	createDailyTimerReport("Omax 3");
	console.log("New DRs generated" + Date()); 
}

cron.schedule('0 4 * * *', function() {
	generateDailyReports();
})

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
