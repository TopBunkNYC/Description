const express = require('express');
const bodyParser = require('body-parser');
const React = require('react');
const ReactDom = require('react-dom/server');
const application = require('../react-client/dist/bundle-server.js').default;
// const model = require('./model/postgresModel.js');
const model = require('./model/mongoModel.js');
const path = require('path');
const port = process.env.PORT || 7000;

const app = express();
app.use(express.static(path.join(__dirname, '../react-client/dist')));
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
  return model.getListing(id)
		.then((data) => {
			if (data && data.id === id) {
				props = data;
				let component = React.createElement(application, props);
				html = ReactDom.renderToString(component);
				return {ssr_html: html, props: JSON.stringify(props), success: true};
			} else {
				return {success: false};
			}
		})
		.catch((err) => {
			console.log(err);
		});
};

app.get('/listings', function(req, res) {
  ssr(Number(req.query.id))
		.then((results) => {
			if (results.success === false) {
				res.status(404).send();
			} else {
				res.end(`
					<!DOCTYPE html>
					<html>
					<head>
						<title>Description</title>
						<link rel="icon" type="image/png" href="https://s3.us-east-2.amazonaws.com/topbunk-profilephotos/favicon.ico">
					</head>
					<body>
						<div id="description">${results.ssr_html}</div>
						<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
						<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
						<script type="text/javascript" src="/bundle.js"></script>
						<script>
							ReactDOM.hydrate(
								React.createElement(Description, ${results.props}),
								document.getElementById('description')
							);
						</script>
					</body>
					</html>
				`);
			}
		});
});

app.get('/renderDescription', (req, res) => {
	ssr(Number(req.query.id))
		.then((results) => {
			res.send(results);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send();
		});
});


const loaderio = process.env.loaderio || require('../config.js').loader;
app.get(`/loaderio-${loaderio}`, (req, res) => {
	res.send(`loaderio-${loaderio}`);
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

