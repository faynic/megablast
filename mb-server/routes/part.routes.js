module.exports = app => {
	const parts = require("../controllers/part.controller.js");

	var router = require("express").Router();

	router.post("/", parts.create);
	router.get("/", parts.findAll);
	router.get("/:id", parts.findOne);
	router.put("/:id", parts.update);
	router.delete("/:id", parts.delete);
	router.delete("/", parts.deleteAll);



	app.use('/api/parts', router);
};