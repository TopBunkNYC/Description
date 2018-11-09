const express = require('express');
const bodyParser = require('body-parser');
const model = require('./model/model.js');
const path = require('path');
const port = process.env.PORT || 7000;

const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/description', function(req, res) {
	model.getListing(req.query.id)
		.then((results) => {
			res.send(results[0]);
		})
		.catch((err) => console.log(err));
});

app.post('/description', function(req, res) {
	model.addListing(req.body)
		.then((response) => {
			res.send(response);
		})
		.catch((err) => console.log(err));
});

app.put('/description', function(req, res) {
	model.updateListing(req.body)
		.then((response) => {
			res.send(response);
		})
		.catch((err) => console.log(err));
});

app.delete('/description', function(req, res) {
	model.deleteListing(req.query.id)
		.then((response) => {
			res.send(response);
		})
		.catch((err) => console.log(err));
});

app.get('/listing', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

