# Description Component
This component displays the description of each listing in the TopBunk application.

## Related Projectts

  - https://github.com/TopBunkNYC/Proxy_Matt
  - https://github.com/TopBunkNYC/Neighborhood
  - https://github.com/TopBunkNYC/Booking
  - https://github.com/TopBunkNYC/Reviews

## Development

### Setting up database
Before the microservice can be run, a Mongo database needs to be set up to store the listings. Set up the local database and follow the steps below to populate it:

```sh
# download dependencies
npm install

# build csv file containing 10M listings (about 25 min)
npm run build-csv

# populate mongo databse
npm run seed-mongo # please update the path of the csv file in /database/mongoInit.sh to the location of your file
```

### Setting up `config.js`
A `config.js` file needs to be created and added to the root directory. This file should export an object containing the following key: `mongoURL`, whose value corresponds to the ip address of the database.

```sh
module.exports = {
  mongoURL: 'mongo-database-host-address'
}
```

### Launching the application locally
From within the root directory:

```sh
# run webpack to build client bundle
npm run react-prod

# start server on localhost
npm start
```

Then access the microservice at: http://localhost:7000/listings?id=#, replacing # with any number from 1 to 10M, corresponding to the listing ID. For example, listing 5465 would be http://localhost:3001/listing?id=5465.
