const express = require('express');
const path = require('path');
const app = express();
var http = require('http');
var https = require('https')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);