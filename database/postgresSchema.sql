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

\copy topbunk.listings (id, room_type, username, room_details, city, city_details, listing_details, guest_access, interaction, other, avatar, num_guests, num_bedrooms, num_beds, num_baths) from 'data.csv' with delimiter as E'\t' CSV;

ALTER TABLE topbunk.listings ADD PRIMARY KEY (id);