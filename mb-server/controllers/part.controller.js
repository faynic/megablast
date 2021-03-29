const db = require("../models");
const Part = db.parts;

//Create one database entry
exports.create = (req, res) => {
	

	const part = new Part({
		
		part_number: req.body.part_number,
		supplier: req.body.supplier,
		given_part_name: req.body.given_part_name
	});

	part
		.save(part)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message: 
					err.message || "An error occured while adding part"
			});
		});

};

//Retrieve a part by number 'condition?????
exports.findAll = (req, res) => {
	const given_part_name = req.query.given_part_name;
	var condition = given_part_name ? { given_part_name: { $regex: new RegExp(given_part_name), $options: "i" } } : {};

	Part.find(condition)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "An error occued while looking up this part"
			});
		});

};

//Find one part
exports.findOne = (req, res) => {
	const id = req.params.id;

	Part.findById(id)
		.then(data => {
			if (!data)
				res.status(404).send({message: "This part was not found"});
			else res.send(data);
		})
		.catch(err => {
			res.status(500)
			.send({message: "A part with the number " + part_number + " was not found"});
		});

};

//Update a part
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Part.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update part with id=${id}a`
        });
      } else res.send({ message: "Part was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
//Delete one
exports.delete = (req, res) => {
	const id = req.params.id;

	Part.findByIdAndRemove(id)
		.then(data => {
			if (!data){
				res.status(404).send({
					message: `Cannot delete part No. ${part_number}`
				});
			} else {
				res.send({
					message: "Part was removed successfully"
				});
			}
		})
		.catch(err => {
			res.satus(500).send({
				message: "Could not delete this part"
			});
		});

};


//Delete all 
exports.deleteAll = (req, res) => {
	Part.deleteMany({})
		.then(data => {
			res.send({
				message: `${data.deletedCount} parts have been removed`
			});
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Could not remove all these parts"
			});
		});
};

exports.findAllPublished = (req, res) => {

}