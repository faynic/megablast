module.exports = mongoose => {
	const schema = mongoose.Schema(
		{
			omaxId: Number,
			omaxName: String,
			operator: String,
			totalRuntime: Number,
			isActive: Number,
			headRuntime: Number,
			tubeRuntime: Number,
		}
	);

	schema.method("toJSON", function() {
		const {v, _id, ...object} = this.toObject();
		object.id = _id;
		return object;
	});

	const Omax = mongoose.model("omax", schema);
	return Omax;
}



