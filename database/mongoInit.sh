mongo topbunk --eval "db.listings.drop();"
mongo topbunk --eval "db.counters.drop();"

time mongoimport -d topbunk --collection listings --type tsv --columnsHaveTypes --fields "id.int32(),room_type.string(),username.string(),room_details.string(),city.string(),city_details.string(),listing_details.string(),guest_access.string(),interaction.string(),other.string(),avatar.string(),num_guests.int32(),num_bedrooms.int32(),num_beds.int32(),num_baths.int32()" --file /Users/matthewjones/Documents/Hack_Reactor/SDC/Description/data.csv;

time mongo topbunk < ./database/mongoUpdate.js