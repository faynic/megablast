module.exports = mongoose => {
	var schema = mongoose.Schema(
		{
			omaxName: String,
			partChanged: String,
			operator: String,
			currentTotalRuntime: Object,
			physicalTotalRuntime: Number,
			partTotalRuntime: Number,
		},
		{ 
			timestamps: true 
		}
	);

	schema.method("toJSON", function() {
		const {v, _id, ...object} = this.toObject();
		object.id = _id;
		
		return object;
	});

	const Log = mongoose.model("log", schema);
	return Log
};
		