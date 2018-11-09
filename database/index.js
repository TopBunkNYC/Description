const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    database: 'topbunk'
  } 
});

module.exports = db;