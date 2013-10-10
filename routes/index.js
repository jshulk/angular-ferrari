
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.listCars = function(req, res){
	res.render('index.html');
};