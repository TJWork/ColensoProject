var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var basex = require('basex');

var client = new basex.Session("127.0.0.1", 1984, "admin", "admin");

var list = [];
var resource;

router.get("/",function(req,res,next){
	console.log('execute0 : ' + client.state);
	resource = res;
	client.execute("xquery db:list('data')", listifyResult);	

});


function listifyResult(err, reply){
	list = reply.result.split("\r\n");
	console.log(list);	
	resource.render('index', { title: 'NZ Chronicles'});
				
};



/*
router.get("/",function(req,res,next){
	console.log('execute0 : ' + client.state);
	
var result = client.execute("xquery db:list('data')");
console.log('execute2 result : ' + result);*/
	/*function(body){
		var $ = cheerio.load(body);
		var list = [];
		console.log('execute1 : ' + $('result'));
		$('result').each(function(i,elem){
			console.log('elem: ' + elem);
			list.push({ p: $(elem)});
		});
		res.render('index', { title: 'ECS Video Rental', images: list });
});*/
//});



//client.execute("xquery $result in db:list('data')",
//function (body) {
//var $ = cheerio.load(body);
//var list = [];
//$('result').each(function(i,elem){
//	console.log('elem: ' + elem);
//var title = $(elem).find('title').text();
//list.push({ p: title, image: url });
//});
//res.render('index', { title: 'ECS Video Rental', images: list });
//}
//);
//});




/* GET home page. *//*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;
