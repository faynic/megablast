module.exports = mongoose => {
	var schema = mongoose.Schema(
		{
			part_number: Number,
				supplier: String, 
				supplier_part_name: String,
				given_part_name: String,
				current_quantity: Number,
				minimum_quantity_required: Number,
				maximum_quantity: Number 
 					
		}
	);
	
	schema.method("toJSON", function() {
		const { v, _id, ...object} = this.toObject();
		object.id = _id;
		return object;
	});

	const Part = mongoose.model("part", schema);
	return Part
};
