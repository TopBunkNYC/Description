require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const React = require('react');
const ReactDom = require('react-dom/server');
const application = require('../react-client/dist/bundle-server.js').default;
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

const ssr = (id) => {
  return model.getListing(Number(id))
		.then((data) => {
			props = data;
    	let component = React.createElement(application, props);
			html = ReactDom.renderToString(component);
			return [html, JSON.stringify(props)];
		})
		.catch((err) => {
			console.log(err);
		});
};

app.get('/listings', function(req, res) {
  ssr(req.query.id)
		.then((results) => {
			res.end(`
				<!DOCTYPE html>
				<html>
				<head>
          <title>Description</title>
          <link rel="icon" type="image/png" href="https://s3.us-east-2.amazonaws.com/topbunk-profilephotos/favicon.ico">
				</head>
				<body>
					<div id="description">${results[0]}</div>
					<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
					<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
					<script type="text/javascript" src="/bundle.js"></script>
					<script>
						ReactDOM.hydrate(
							React.createElement(Description, ${results[1]}),
							document.getElementById('description')
						);
					</script>
				</body>
				</html>
  		`);
		});
});

app.get('/renderDescription', (req, res) => {
	ssr(req.query.id)
		.then((results) => {
			res.send(results);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send();
		});
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

