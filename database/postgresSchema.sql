DROP TABLE IF EXISTS topbunk.listings;

DROP SCHEMA IF EXISTS topbunk;

CREATE SCHEMA topbunk;

CREATE TABLE topbunk.listings (
	id SERIAL,
	room_type TEXT,
	username TEXT,
	room_details TEXT,
	city TEXT,
	city_details TEXT,
	listing_details TEXT,
	guest_access TEXT,
	interaction TEXT,
	other TEXT,
	avatar TEXT,
	num_guests INTEGER,
	num_bedrooms INTEGER,
	num_beds INTEGER,
	num_baths INTEGER
);