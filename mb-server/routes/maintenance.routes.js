module.exports = app => {
	const logs = require("../controllers/maintenance-log.controller.js");

	var router = require("express").Router();

	router.post("/", logs.create);
	router.get("/", logs.findAll);


	app.use('/api/logs', router);
};