// const db = require('../../database/indexPostgres.js');
const db = require('../../database/indexMongo.js');

// Postgres functions

// const getListing = (id) => {
//   return db('topbunk.listings').where({id: id})
//     .then((results) => results[0])
//     .catch((err) => console.log(err));
// };

// const addListing = (data) => {
//   return db('topbunk.listings').insert(data)
//     .catch((err) => console.log(err));
// };

// const deleteListing = (id) => {
//   return db('topbunk.listings').where({id: id}).del()
//     .catch((err) => console.log(err));
// };

// const updateListing = (data) => {
//   let {id, ...changes} = data;
//   return db('topbunk.listings').where({id: id}).update(changes)
//     .catch((err) => console.log(err));
// };

// Mongo functions

const getListing = (id) => {
  return db.findOne({id: id}).exec()
    .catch((err) => console.log(err));
};

const addListing = (data) => {
  let listing = new db(data)
  return listing.save((err) => console.log(err));
};

const deleteListing = (id) => {
  return db.deleteOne({id: id}).exec()
    .catch((err) => console.log(err));
};

const updateListing = (data) => {
  let {id, ...changes} = data;
  console.log(id, changes)
  return db.findOneAndUpdate({id: id}, changes).exec()
    .catch((err) => console.log(err));
};

module.exports.getListing = getListing;
module.exports.addListing = addListing;
module.exports.deleteListing = deleteListing;
module.exports.updateListing = updateListing;