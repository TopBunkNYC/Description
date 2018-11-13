const db = require('../../database/indexMongo.js');

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
  return db.findOneAndUpdate({id: id}, changes).exec()
    .catch((err) => console.log(err));
};

module.exports.getListing = getListing;
module.exports.addListing = addListing;
module.exports.deleteListing = deleteListing;
module.exports.updateListing = updateListing;