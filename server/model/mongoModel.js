const model = require('../../database/indexMongo.js');
const db = model.Listing;
const connection = model.Connection;

const getListing = (id) => {
  return connection.db.collection('listings').find({id: id}).toArray().then((results) => {
    return results[0]
  })
  // return db.findOne({id: id})
    .catch((err) => console.log(err));
};

const addListing = (data) => {
  // let listing = new db(data)
  // return listing.save()
  return connection.db.collection('listings').insert(data)
    .catch((err) => console.log(err));
};

const deleteListing = (id) => {
  return db.deleteOne({id: id})
    .catch((err) => console.log(err));
};

const updateListing = (data) => {
  let {id, ...changes} = data;
  return db.findOneAndUpdate({id: id}, changes)
    .catch((err) => console.log(err));
};

const resetCounter = (number) => {
  return connection.db.collection('counters').update({}, {$set: {seq: number}});
};

module.exports.getListing = getListing;
module.exports.addListing = addListing;
module.exports.deleteListing = deleteListing;
module.exports.updateListing = updateListing;
module.exports.resetCounter = resetCounter;
module.exports.connection = connection;
