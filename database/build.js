const faker = require('faker');
const knex = require('../database/index.js');

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

(async () => {
  let time = new Date().getTime() / 1000;
  for (let i = 0; i < 10000; i++) {
    let arr = [];
    for (let x = 0; x < 1000; x++) {
      const location = faker.address.city();
      arr.push({
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
      })
    }
    // await knex.batchInsert('topbunk.listings', arr, 500);
    await Promise.all([knex.batchInsert('topbunk.listings', arr.slice(0, 500), 500),
      knex.batchInsert('topbunk.listings', arr.slice(500, 1000), 500)]);
    console.log(i+1);
  }
  knex.raw('ALTER TABLE topbunk.listings ADD PRIMARY KEY (id);')
  console.log(new Date().getTime() / 1000 - time);
  knex.destroy();
})();

// (async () => {
//   let time = new Date().getTime() / 1000;
//   for (let i = 0; i < 200; i++) {
//     let arr = [];
//     for (let x = 0; x < 500; x++) {
//       const location = faker.address.city();
//       let vars = ([`'${randomize(roomType)}'`, `'${faker.name.findName().replace(/'/g, "\'\'")}'`, `'${createListing(location).replace(/'/g, "\'\'")}'`, `'${location.replace(/'/g, "\'\'")}'`, `'${faker.lorem.paragraphs()}'`,
//         `'${faker.lorem.paragraphs()}'`, `'${faker.lorem.paragraphs()}'`, `'${faker.lorem.paragraphs()}'`, `'${faker.lorem.paragraphs()}'`, 
//           `'${faker.image.avatar()}'`, randomize([1, 2, 3, 4, 5, 6, 7, 8]), randomize([1, 2, 3]), 
//           randomize([1, 2, 3, 4, 5, 6]), randomize([1, 2])]).join(', ');
//       arr.push('(' + vars + ')');
//     }
//     //console.log(`TEXT: insert into topbunk.listings (room_type, username, room_details, 
//     //   city, city_details, listing_details, guest_access, interaction,
//     //   other, avatar, num_guests, num_bedrooms, num_beds, num_baths) values ${arr.join(', ')}`)
//     await knex.raw(`insert into topbunk.listings (room_type, username, room_details, 
//       city, city_details, listing_details, guest_access, interaction,
//       other, avatar, num_guests, num_bedrooms, num_beds, num_baths) values ${arr.join(', ')}`);
//     console.log(i+1);
//   }
//   console.log(new Date().getTime() / 1000 - time);
//   knex.destroy();
// })();