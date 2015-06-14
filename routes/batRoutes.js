'use strict'
var express = require('express');
var routes = function(batModel){
	var router = express.Router();
	var batController = require('../controllers/batController.js')(batModel);

	router.route('/batwing')
	  .put(batController.put)
	  .delete(batController.remove)
	  .post(batController.post)
	  .get(batController.get);

	return router; 
};

module.exports = routes;