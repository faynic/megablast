module.exports = app => {
	const omaxs = require("../controllers/omax.controller.js");

	var router = require("express").Router();

	router.post("/", omaxs.create);
	router.get("/", omaxs.findAll);
	router.delete("/", omaxs.deleteAll);

	app.use('/api/omaxs', router);
};