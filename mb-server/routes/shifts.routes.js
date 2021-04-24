module.exports = app => {

	const shifts = require("../controllers/shift.controller.js")

	var router = require('express').Router();


	app.use('/api/shifts', router);
}