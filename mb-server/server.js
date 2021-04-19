const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app = express();

var corsOptions = {
origin: "*-"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }));






require("../mb-server/routes/part.routes")(app);
require("../mb-server/routes/omax.routes")(app);
require("../mb-server/routes/maintenance.routes")(app);
require("../mb-server/routes/admin.routes")(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT, '192.168.50.167', () => {
	console.log(`Server is running on port ${PORT}.`);
});
	








//database
const db = require("./models");

db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log("Connected to the database", db.url);
	})
	.catch(err => {
		console.log("Cannoter Connect", err);
		process.exit();
	});


