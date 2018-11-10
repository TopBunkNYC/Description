mongo topbunk --eval "db.listings.drop();"
mongo topbunk --eval "db.counters.drop();"

mongoimport -d topbunk --collection listings --type tsv --columnsHaveTypes --fields "room_type.string(),username.string(),room_details.string(), city.string(), city_details.string(), listing_details.string(), guest_access.string(), interaction.string(), other.string(), avatar.string(), num_guests.int32(), num_bedrooms.int32(), num_beds.int32(), num_baths.int32()" --file /Users/matthewjones/Documents/Hack_Reactor/SDC/Description/data3.csv;

mongo topbunk < ./database/mongoUpdate.sql