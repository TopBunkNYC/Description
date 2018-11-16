const mongo = require('../server/model/mongoModel.js');

setTimeout(() => {
  mongo.addListing({username: 'matt jones', room_type: 'test', num_guests: 10, id: 10000001});
}, 1000);