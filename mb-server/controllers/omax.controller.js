const db = require("../models");
const Omax = db.omaxs;


exports.create = (req, res) => {

	const omax = new Omax({
		omax_id: req.body.omax_id,
		omax_name: req.body.omax_name,
		operator: req.body.operator,
		total_runtime: req.body.total_runtime,
		is_active: req.body.is_active,
		tube_runtime: req.body.tube_runtime,
		head_runtime: req.body.head_runtime
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