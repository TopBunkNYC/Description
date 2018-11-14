const db = require('../../database/indexPostgres.js');

const getListing = (id) => {
  return db('topbunk.listings').where({id: id})
    .then((results) => results[0])
    .catch((err) => console.log(err));
};

const addListing = (data) => {
  return db('topbunk.listings').insert(data)
    .catch((err) => console.log(err));
};

const deleteListing = (id) => {
  return db('topbunk.listings').where({id: id}).del()
    .catch((err) => console.log(err));
};

const updateListing = (data) => {
  let {id, ...changes} = data;
  return db('topbunk.listings').where({id: id}).update(changes)
    .catch((err) => console.log(err));
};

const resetCounter = (number) => {
  return db.raw('select setval(?, ?, false)', ['topbunk.listings_id_seq', number])
    .catch((err) => console.log(err));
};

module.exports.getListing = getListing;
module.exports.addListing = addListing;
module.exports.deleteListing = deleteListing;
module.exports.updateListing = updateListing;
module.exports.resetCounter = resetCounter;
module.exports.connection = db;