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
	const omaxName = req.query.omaxName;
	var condition = omaxName ? {omaxName: {$regex: new RegExp(omaxName), $options: "i"} } : {};

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

exports.findOne = (req, res) => {
	const id = req.params.id;

	Log.findById(id)
		.then(data => {
			if(!data)
				res.status(404).send({message: "This log was not found"});
			else res.send(data);
		})
		.catch(err => {
			res.status(500)
			.send({message: "This log was not found"});
		});
};


exports.update = (req, res) => {
	if(!req.body) {
		return res.status(500).send({
			message: "A log must be filled before adding it to the list" 
		});
	}


	const id = req.params.id;

	Log.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot update Log: ${id}`
				});
			} else res.send({message: "Update successful"});
		})
		.catch(err => {
			res.status(500).send({
				message: "There was an error updating the log"
			});
		});
	};



exports.delete = (req, res) => {
	const id = req.params.id;

	Log.findByIdAndRemove(id)
		.then(data => {
			if(!data){
				res.status(404).send({
					message: "Couldnt not remove this log"
				})
			} else {
				res.send({
					message: "Successful deletion"
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Could not delete this log"
			});
		});
};


exports.deleteAll = (req, res) => {
	Log.deleteMany({})
		.then(data => {
			res.send({
				message: `Alls logs have been removed (${data.deletedCount}`
			});
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Could not clear logs"
			});
		});
};