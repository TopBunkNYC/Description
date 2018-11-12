db.counters.insert({_id: 'listings', id: 'listings', seq: 0});

db.loadServerScripts();

db.listings.find().forEach(function(doc){db.listings.update({_id: doc._id}, {$set: {id: getNextSequence('listings')}});});

-- db.listings.createIndex({'id': 1}, {unique: true});