const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

var corsOptions = {
origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true }));

app.get('/', (req, res) => {
	res.json({message: "Welcome"});
});

require("../mb-server/routes/part.routes")(app);
require("../mb-server/routes/omax.routes")(app);
require("../mb-server/routes/maintenance.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
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
		console.log("Connected to the database");
	})
	.catch(err => {
		console.log("Cannoter Connect", err);
		process.exit();
	});


