'use strict'
var express = require('express');
var routes = function(batModel){
	var router = express.Router();

	router.route('/batwing')
	  .put(function(req,res){
	  	var comic = req.body.comic;
		var genre = req.body.genre;
		var query = { comic : comic };
		batModel.findOne(query,function(err,docs){
			if(err) 
				throw err;
			else{
				docs.genre = genre;
				docs.save();
			}
		});
	  })
	  .delete(function(req,res){
	  	var genre = req.params.genre;
	  	batModel.delete( { genre : genre });
	  	res.status(200);
	  })
	  .post(function(req,res){
		var comic = req.body.comic;
		var genre = req.body.genre;
		var query = { comic : comic, genre : genre };
		var batModel = new batModel(query);
		batModel.save();
		res.status(200); 
	  })
	  .get(function(req,res){
	    batModel.find(function(err,bat){
	      res.json(bat);
	    });
	  });

	return router; 
};

module.exports = routes;