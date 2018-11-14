db.counters.insert({id: 'listings', seq: 10000000});

db.listings.createIndex({'id': 1}, {unique: true});