module.exports = app => {
	const parts = require("../controllers/part.controller.js");

	var router = require("express").Router();

	router.post("/", parts.create);




	app.use('/api/parts', router);
};