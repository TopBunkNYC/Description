const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

// // local database
// mongoose.connect('mongodb://localhost:27017/topbunk', {poolSize: 10, autoIndex: false});

// deployed database
mongoose.connect(`mongodb://${process.env.mongoURL || require('../config.js').mongoURL}:27017/topbunk`, {poolSize: 10, autoIndex: false});

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

let Listing = mongoose.model('listing', listingSchema);

module.exports = {Listing: Listing, Connection: mongoose.connection};
