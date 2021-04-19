const { Schema } = require("mongoose");

module.exports = mongoose => {
	const schema = mongoose.Schema(
		{
			omax: { type: Schema.Types.ObjectId, ref: 'omax'},
			omaxName: String,
			reportType: String,
			reportValue: Number,
			reportAuthor: String



		},
		{ timestamps: true}


	);


	schema.method("toJson", function() {
		const {v, _id, ...object} = this.toObject();
		object.id = _id;
		return object;
	})



	const Report = mongoose.model("report", schema);
	return Report;
}

