const { Schema } = require("mongoose");


//Shift Logs
module.exports = mongoose => {
	const schema = mongoose.Schema (
		{
			omax: { type: Schema.Types.ObjectId, ref: 'omax' },
			uptimeLogs: Array,
			shiftStartTimer: Number,
			shiftEndTimer: Number,
			avgShiftUptime: Number,
			currentShift: String

		},
		{timestamps: true}


	)
	const Shift = mongoose.model("shift", schema);
	return Shift;
}

