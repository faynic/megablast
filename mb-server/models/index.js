const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.parts = require("./part.model.js")(mongoose);
db.omaxs = require("./omax.model.js")(mongoose);
db.logs = require("./maintenance.model.js")(mongoose);

module.exports = db;