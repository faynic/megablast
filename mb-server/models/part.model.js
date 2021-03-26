module.exports = mongoose => {
	const Part = mongoose.model(
		"part",
		mongoose.Schema(
			{
				partnumber: Number,
				supplier: String, 
				supplierPartName: String,
				givenPartName: String,
				currentQuantity: Number,
				minimumQuantityRequired: Number,
				maximumQuantity: Number 
 				
			}
		)
	);

	return Part;
}