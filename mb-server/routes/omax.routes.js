module.exports = app => {
	const omaxs = require("../controllers/omax.controller.js");

	var router = require("express").Router();

	router.post("/", omaxs.create);
	router.get("/", omaxs.findAll);


	app.use('/api/omaxs', router);
};