/**
 * FoodController
 *
 * @description :: Server-side logic for managing Foods
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  /**
  * `FoodController.autocomplete()`
  * This method will search name list for autocomplet when user type few characters
  */  
  autocomplete: function (req, res) {
	var limit_number = 10;
	Food.find({where: { name: req.params.name + '%'  }, limit: limit_number }).exec(function (err,food){   	
    	if (err) return res.serverError(err);
    	return res.json(food);
   	});
  },


  /**
  * `FoodController.find()`
  * Return food details given food id in db
  */
  find: function (req, res) {	
	Food.find({id: req.params.id}).exec(function (err,food){
		if (err) return res.serverError(err);
        return res.json(food);
  	});
  },

  
  /**
  * `FoodController.create()`
  * Create a food record in db according to data from request
  */  
  create: function(req, res){
  		var params = req.params.all()
  		Food.create(params).exec(function createCB(err,created){
  			if (err) return res.serverError(err);
    		return res.json({
    			success:1,
      			notice: 'Created food with name ' + created.name
    	  	});
        });
  }
  
};

