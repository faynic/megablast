module.exports = mongoose => {
	const schema = mongoose.Schema(
		{
			omax_id: Number,
			omax_name: String,
			operator: String,
			total_runtime: Number,
			is_active: Number,
			head_runtime: Number,
			tube_runtime: Number,
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



