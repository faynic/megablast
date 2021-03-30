const db = require("../models");
const Omax = db.omaxs;


exports.create = (req, res) => {

	const omax = new Omax({
		omaxId: req.body.omaxId,
		omaxName: req.body.omaxName,
		operator: req.body.operator,
		totalRuntime: req.body.totalRuntime,
		isActive: req.body.isActive,
		tubeRuntime: req.body.tubeRuntime,
		headRuntime: req.body.headRuntime
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