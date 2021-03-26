const db = require("../models");
const Part = db.parts;

//Create
exports.create = (req, res) => {
	

	const part = new Part({
		partnumber: req.body.partnumber,
		

	});

	part
		.save(part)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Error occured."
			});
		});


};

//Retrieve all
exports.findAll = (req, res) => {


};

//Find
exports.findOne = (red, res) => {


};

//Update
exports.update = (req, res) => {

};

//Delete one
exports.delete = (req, res) => {

};

exports.deleteAll = (req, res) => {

};

exports.findAllPublished = (req, res) => {

}