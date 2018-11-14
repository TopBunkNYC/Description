const mongoose = require('mongoose');
const Promise = require('bluebird');
const autoinc = require('mongoose-sequence')(mongoose);
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/topbunk');

let listingSchema = mongoose.Schema({
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
listingSchema.plugin(autoinc, {inc_field: 'id', id: 'listings'});

let Listing = mongoose.model('listing', listingSchema);

module.exports = {Listing: Listing, Connection: mongoose.connection};