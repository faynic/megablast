const db = require("../models");
const { on } = require("events");

const Omax = db.omaxs;
const Reports = db.reports;
const Shifts = db.shifts;

exports.create = (req, res) => {



	const omax = new Omax({
		omaxId: req.body.omaxId,
		omaxName: req.body.omaxName,
		omaxIpAddress: req.body.omaxIpAddress,
		totalRuntime: req.body.totalRuntime,
		isActive: req.body.isActive,
		lastTubeChange: req.body.lastTubeChange,
		lastHeadChange: req.body.lastHeadChange
		
	});

	omax
		.save(omax)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Could not add machine to database"
			});
		});
};



exports.findAll = (req, res) => {
	const name = req.query.omaxName;
	var condition = name ? {name: {$regex: new RegExp(name), $options: "i" } } : {};

	Omax.find(condition)
		.populate('reports', Reports)
		.populate('shifts', Shifts)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Problems getting machines"
			});
		});

};

exports.update = (req, res) => {
	if(!req.body) {
		return res.status(500).send({
			message: "A log must be filled before adding it to the list" 
		});
	}


	const id = req.params.id;

	Omax.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
		.then(data => {
			if(!data) {
				res.status(404).send({
					message: `Cannot update Log: ${id}`
				});
			} else res.send({message: "Update successful"});
		})
		.catch(err => {
			res.status(500).send({
				message: "There was an error updating the machine"
			});
		});
	};


exports.delete = (req, res) => {
	const id = req.params.id;

	Omax.findByIdAndRemove(id)
		.then(data => {
			if(!data){
				res.status(404).send({
					message: "Couldnt not remove this omax"
				})
			} else {
				res.send({
					message: "Successful deletion"
				});
			}
		})
		.catch(err => {
			res.status(500).send({
				message: "Could not delete this omax"
			});
		});
};

	

exports.deleteAll = (req, res) => {
	Omax.deleteMany({})
		.then(data => {
			res.send({
				message: "All logs have been removed"
			});
		})
		.catch (err => { 
			res.status(500).send({
				message:
					err.message || "Could not delete machines"
			})
		});
	};

