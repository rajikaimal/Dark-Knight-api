'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;
var db = mongoose.connect('mongodb://localhost/batman');

app.use(bodyParser.json());

var batModel = require('./models/batModel.js');
var router = require('./routes/batRoutes.js')(batModel);

app.use('/api',router);

app.get('/',function(req,res){
  res.send('API home');
});

app.listen(port,function(){
  console.log('Server listening on port ' + port);
});