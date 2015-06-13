var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var port = 3000;
var db = mongoose.connect('mongodb://localhost/darkKnight');

app.use('/api',router);

router.route('/batwing')
  .get(function(req,res){
    
  });

router.route('/batgadgets')
  .get(function(req,res){
    
  });

app.get('/',function(req,res){
  res.send('API home');
});

app.listen(port,function(){
  console.log('Server listening on port ' + port);
});