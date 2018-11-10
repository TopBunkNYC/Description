const faker = require('faker');
const knex = require('./indexPostgres.js');
const Description = require('./indexMongo.js');

const randomize = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const roomType = ['ENTIRE APARTMENT', 'ENTIRE LOFT', 'PRIVATE ROOM IN TOWNHOUSE', 'PRIVATE ROOM IN APARTMENT', 'PRIVATE ROOM', 'PRIVATE ROOM IN GUEST SUITE'];

const adj = ['Small', 'Large', 'Cozy', 'Amazing', 'Little', 'Beautiful', 'Charming', 'Lovely', ''];
const noun = ['Apartment', 'Loft', 'House', 'Condo', 'Studio'];
const area = ['in Downtown', 'Just Outside', 'Outside', 'in', 'Steps Away from Downtown', 'Minutes Away from'];

const createListing = (location) => {
  return `${randomize(adj)} ${randomize(noun)} ${randomize(area)} ${location}`;
};

// Mongo Build

const location = faker.address.city();
let newDescription = new Description({
  id: '1',
	room_type: randomize(roomType),
	username: faker.name.findName(),
	room_details: createListing(location),
	city: location,
	city_details: faker.lorem.paragraphs(),
	listing_details: faker.lorem.paragraphs(),
	guest_access: faker.lorem.paragraphs(),
	interaction: faker.lorem.paragraphs(),
	other: faker.lorem.paragraphs(),
	avatar: faker.image.avatar(),
	num_guests: randomize([1, 2, 3, 4, 5, 6, 7, 8]),
	num_bedrooms: randomize([1, 2, 3]),
	num_beds: randomize([1, 2, 3, 4, 5, 6]),
	num_baths: randomize([1, 2])
});
newDescription.save();

// Postgres Build

// (async () => {
//   let time = new Date().getTime() / 1000;
//   for (let i = 0; i < 10000; i++) {
//     let arr = [];
//     for (let x = 0; x < 1000; x++) {
//       const location = faker.address.city();
//       arr.push({
//         room_type: randomize(roomType),
//         username: faker.name.findName(),
//         room_details: createListing(location),
//         city: location,
//         city_details: faker.lorem.paragraphs(),
//         listing_details: faker.lorem.paragraphs(),
//         guest_access: faker.lorem.paragraphs(),
//         interaction: faker.lorem.paragraphs(),
//         other: faker.lorem.paragraphs(),
//         avatar: faker.image.avatar(),
//         num_guests: randomize([1, 2, 3, 4, 5, 6, 7, 8]),
//         num_bedrooms: randomize([1, 2, 3]),
//         num_beds: randomize([1, 2, 3, 4, 5, 6]),
//         num_baths: randomize([1, 2])
//       })
//     }
//     // await knex.batchInsert('topbunk.listings', arr, 500);
//     await Promise.all([knex.batchInsert('topbunk.listings', arr.slice(0, 500), 500),
//       knex.batchInsert('topbunk.listings', arr.slice(500, 1000), 500)]);
//     console.log(i+1);
//   }
//   knex.raw('ALTER TABLE topbunk.listings ADD PRIMARY KEY (id);')
//   console.log(new Date().getTime() / 1000 - time);
//   knex.destroy();
// })();