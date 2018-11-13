db.counters.insert({_id: 'listings', id: 'listings', seq: 10000000});

db.listings.createIndex({'id': 1}, {unique: true});