var controller = function(batModel){
	var get = function(req,res){
	    batModel.find(function(err,bat){
	      res.json(bat);
	    });
	  };
	var post = function(req,res){
		var comic = req.body.comic;
		var genre = req.body.genre;
		var query = { comic : comic, genre : genre };
		var batModel = new batModel(query);
		batModel.save();
		res.status(200).json('done'); 
	  };
	var remove = function(req,res){
	  	var genre = req.params.genre;
	  	batModel.delete( { genre : genre });
	  	res.status(200);
	  };
	var put = function(req,res){
	  	var comic = req.body.comic;
		var genre = req.body.genre;
		var query = { comic : comic };
		batModel.findOne(query,function(err,docs){
			if(err) 
				throw err;
			else{
				docs.genre = genre;
				docs.save();
				res.status(200).json('done'); 
			}
		});
	  };
	return {
		get : get,
		post : post,
		remove : remove,
		put : put
	}
}

module.exports = controller;