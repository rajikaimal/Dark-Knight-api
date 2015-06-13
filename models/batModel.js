var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var batModel =  mongoose.Schema({
	comic : {
		type : String
	},
	genre : {
		type: String
	}
});

module.exports = mongoose.model('batman',batModel);
