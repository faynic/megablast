module.exports = app => {
	const omaxs = require("../controllers/omax.controller.js");

	var router = require("express").Router();

	router.post("/", omaxs.create);
	router.get("/", omaxs.findAll);
	


	router.put("/:id", omaxs.update);


	

	router.delete("/", omaxs.deleteAll);
	router.delete("/:id", omaxs.delete)
	app.use('/api/omaxs', router);
};