var express = require('express');

var routes = function(batModel){
	var router = express.Router();

	router.route('/batwing')
	  .get(function(req,res){
	    batModel.find(function(err,bat){
	      res.json(bat);
	    });
	  });

	router.route('/batgadgets')
	  .get(function(req,res){
	    
	  });
	return router; 
};

module.exports = routes;