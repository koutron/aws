const express = require('express');
const path = require('path');
const fcc = require('../fcc/server.js');
const email = require('./email.js');
const app = express();

app.use(express.static(path.join(__dirname, '/../portfolio')));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/../portfolio', 'index.html'));
});

app.use(express.static(path.join(__dirname, '/../reactube', 'build')));
app.get('/reactube', function(req, res) {
	res.sendFile(path.join(__dirname, '/../reactube', 'build', 'index.html'));
});

app.use(express.static(path.join(__dirname, '/../weather', 'build')));
app.get('/weather', function(req, res) {
	res.sendFile(path.join(__dirname, '/../weather', 'build', 'index.html'));
});

app.use('/mailerdemon', (req, res) => {
        res.redirect('http://www.kouroscodes.com:9000');
});

app.use('/message', email);

app.use('/fcc', fcc);

app.listen(3000);
//app.listen(8080);
