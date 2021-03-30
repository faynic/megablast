module.exports = app => {
	const logs = require("../controllers/maintenance-log.controller.js");

	var router = require("express").Router();

	router.post("/", logs.create);
	router.get("/", logs.findAll);
	router.get("/:omaxName", logs.findOne);
	router.put("/:id", logs.update);
	router.delete("/:id", logs.delete);
	router.delete("/", logs.deleteAll);


	app.use('/api/logs', router);
};