const faker = require('faker');
const fs = require('fs');

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

const paragraphs = () => {
  return faker.lorem.paragraph() + ' ' + faker.lorem.paragraph();
};

// csv builder

var stream = fs.createWriteStream('data.csv');
var index = 1;

const createData = (length) => {
  const arr = [];
  for (let x = 0; x < length; x++) {
    const location = faker.address.city();
    arr.push(
      `${index}\t${randomize(roomType)}\t${faker.name.findName()}\t${createListing(location)}\t${location}\t${paragraphs()}\t${paragraphs()}\t${paragraphs()}\t${paragraphs()}\t${paragraphs()}\t${faker.image.avatar()}\t${randomize([1, 2, 3, 4, 5, 6, 7, 8])}\t${randomize([1, 2, 3])}\t${randomize([1, 2, 3, 4, 5, 6])}\t${randomize([1, 2])}`
    );
    index++;
  }
  return arr;
};

const writeStream = (writer, len) => {
  const time1 = new Date().getTime();
  var i = len;
  const write = () => {
    let ok = true;
    while (i >= 0 && ok) {
      const time2 = new Date().getTime();
      const data = createData(500).join('\n') + '\n';
      ok = writer.write(data);
      const time3 = new Date().getTime();
      console.log(`${i}: Total time: ${(time3 - time1) / 1000}, Batch time: ${(time3 - time2) / 1000}`);
      i--;
    }
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeStream(stream, 20000);

module.exports = {
  paragraphs,
  randomize,
  createListing,
  roomType
};
