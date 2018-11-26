require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const model = require('./model/postgresModel.js');
const model = require('./model/mongoModel.js');
const path = require('path');
const port = process.env.PORT || 7000;

const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
// app.use(morgan('dev'));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/description', function(req, res) {
	model.getListing(Number(req.query.id))
		.then((results) => {
			res.send(results);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send();
		});
	// res.send();
});

app.post('/description', function(req, res) {
	model.addListing(req.body)
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send();
		});
});

app.put('/description', function(req, res) {
	model.updateListing(req.body)
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send();
		});
});

app.delete('/description', function(req, res) {
	model.deleteListing(Number(req.query.id))
		.then((response) => {
			res.send(response);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send();
		});
});

app.get('/listings', function(req, res) {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

