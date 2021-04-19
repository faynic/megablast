module.exports = app => {
	const reports = require("../controllers/daily-report.controller.js");

	var router = require("express").Router();


	router.get('/reports', reports.findAll);
	router.delete('/reports', reports.deleteAll);

	app.use('/api/admin', router);
}