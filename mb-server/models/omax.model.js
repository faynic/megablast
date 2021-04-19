const { Schema } = require("mongoose");

module.exports = mongoose => {
	const schema = mongoose.Schema(
		{
			omaxId: Number,
			omaxName: {type: String, unique: true},
			omaxIpAddress: String,
			
			totalRuntime: Number,

			isActive: String,

			lastTubeChange: Number,
			lastHeadChange: Number,
			reports: [{ type: Schema.Types.ObjectId, ref: 'report'}]


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



