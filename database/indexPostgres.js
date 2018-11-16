const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    database: 'topbunk'
  },
  pool: {
    min: 0
  }
});

module.exports = db;
