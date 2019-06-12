var express = require('express');
var config = require('config');
var bodyParser = require('body-parser');
var multer  = require('multer');



var app = express();
var http = require('http').Server(app);


// parse post 'json'(bodyParser) ou multpart-form-data(multer)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({
    dest: __dirname + '/uploads/'
}).any());

// carrega os midware e essa joça toda
app.use(require('./app/controllers'))
app.use(require('./app/controllers/feed'))

// public folders
app.use(express.static(__dirname + '/public'));

// cria o webserver
http.listen(config.http.port, function() {
    console.log('Servidor na porta [' + config.http.port + ']...')
});