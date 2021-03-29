const db = require("../models");
const Log = db.logs;

exports.create = (req, res) => {

	const log = new Log({

		omaxName: req.body.omaxName,
		partChanged: req.body.partChanged,
		operator: req.body.operator,
		currentTotalRuntime: req.body.currentTotalRuntime,
		physicalTotalRuntime: req.body.physicalTotalRuntime
	});

	log
		.save(log)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Couldnt post to database"
			});
		});
};


exports.findAll = (req, res) => {
	const omaxName = req.body.omaxName;
	var condition = omaxName ? {omaxName: {$regex: new RegExp(omax_name), $options: "i"} } : {};

	Log.find(condition)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Couldnt find the log"
			});
		});
};