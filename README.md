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

Then access the microservice at: http://localhost:7000/listings?id=#, replacing # with any number from 1 to 10M, corresponding to the listing ID. For example, listing 5465 would be http://localhost:7000/listing?id=5465.

## API

### GET /description
Will return listing description information for queried hostel id

```sh
# Parameters:
id: Hostel id
```

```sh
# Example data from GET /description?id=300:
{
  "id": 300,
  "room_type": "PRIVATE ROOM IN GUEST SUITE",
  "username": "Tanya Balistreri",
  "room_details": "Charming Condo Minutes Away from West Lanceburgh",
  "city": "West Lanceburgh",
  "city_details": "In in dolorem aperiam et aut. Vel dolor quasi voluptas voluptatum velit iure quia. Rerum commodi officiis. Sit rerum ut dolor ducimus quia. Tempora molestias maxime minima consequuntur voluptas. Laboriosam aut sint nobis eligendi aut illo pariatur. Corrupti tenetur natus. Minus vel possimus numquam officia rerum quasi. Harum molestiae qui et cum qui adipisci repellat delectus dolor. Laudantium voluptates minima suscipit non qui laudantium dolorem eum.",
  "listing_details": "Repellat hic quia dolor accusantium dignissimos in. Doloribus in officiis sed mollitia commodi. Aut ut consectetur. Ut modi aspernatur voluptatem aliquam. Magnam in sint labore labore architecto quam. Sed vero maxime a fugit odit est corrupti rerum omnis. Aut officia voluptatem. Aut quia impedit et et cupiditate occaecati. Quam deserunt consequuntur vel. Alias quia et facere inventore. Vel qui voluptatibus similique ea aut reprehenderit rem reprehenderit.",
  "guest_access": "Nisi deleniti exercitationem porro porro fugit itaque. Adipisci saepe rem nulla iste laborum officiis. Illo exercitationem numquam quos autem qui. A eius quaerat sed. Vero tempora inventore unde et temporibus illum pariatur incidunt eos. Dolore non natus aut corporis libero itaque voluptates et. Et eos et eum aut quasi molestiae vel laboriosam cumque. Qui voluptatibus voluptas qui. Veniam ipsam tempora.",
  "interaction": "Qui aliquam magni est est dolores optio et itaque impedit. Recusandae in et laboriosam voluptatem reiciendis sed quo itaque qui. Incidunt vel deleniti labore cupiditate. Voluptas eveniet delectus architecto doloribus et sed. Odit nisi incidunt vero vero. Quos ullam quia voluptates incidunt quos vel voluptas ad necessitatibus. Nemo at ea excepturi est fuga earum.",
  "other": "Vero non illum. Non mollitia eius sit ipsa harum. Enim doloremque ipsam. Dolorem enim perspiciatis et possimus cupiditate dolores. Quia quisquam maxime ipsum rerum corrupti. Autem autem nesciunt fuga beatae exercitationem quam eos commodi. Minima dolores sed reprehenderit. Et quos sit inventore ad nobis.",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/xilantra/128.jpg",
  "num_guests": 7,
  "num_bedrooms": 2,
  "num_beds": 2,
  "num_baths": 2
}
```
    
###POST /description
Will add listing description information

```sh
# Body:
room_type: 'High-level description of the room',
username: 'Name of owner',
room_details: 'More detailed description of the room',
city: 'Location of the hostel',
city_details: 'Description of the hostel location',
listing_details: 'More detailed description of the hostel',
guest_access: 'Guest access instructions',
interaction: 'Description of owner interaction with guest',
other: 'All other information',
avatar: 'URL to avatar image',
num_guests: 'Number of guests that the hostel accomodates',
num_bedrooms: 'Number of bedrooms at the hostel',
num_beds: 'Number of beds at the hostel',
num_baths: 'Number of baths at the hostel'
    
# Note: The hostel id will be automatically generated for your listing
```

###DELETE /description
Will delete listing description information for queried hostel id

```sh
# Parameters:
id: 'Hostel id'
```
    
###PUT /description
Will updated listing description information for hostel id

```sh
# Body:
id: 'Hostel id', # REQUIRED
room_type: 'High-level description of the room',
username: 'Name of owner',
room_details: 'More detailed description of the room',
city: 'Location of the hostel',
city_details: 'Description of the hostel location',
listing_details: 'More detailed description of the hostel',
guest_access: 'Guest access instructions',
interaction: 'Description of owner interaction with guest',
other: 'All other information',
avatar: 'URL to avatar image',
num_guests: 'Number of guests that the hostel accomodates',
num_bedrooms: 'Number of bedrooms at the hostel',
num_beds: 'Number of beds at the hostel',
num_baths: 'Number of baths at the hostel',
```
