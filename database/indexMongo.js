const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/topbunk');

let descriptionSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
	room_type: String,
	username: String,
	room_details: String,
	city: String,
	city_details: String,
	listing_details: String,
	guest_access: String,
	interaction: String,
	other: String,
	avatar: String,
	num_guests: Number,
	num_bedrooms: Number,
	num_beds: Number,
	num_baths: Number
});

let Description = mongoose.model('description', descriptionSchema);

module.exports = Description;