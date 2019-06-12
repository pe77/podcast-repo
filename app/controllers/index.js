var express 	    = require('express');
var tokenService    = require('../middlewares/auth.js');

// bla
var router 		= express.Router();

// inicio de qualquer requisição 
router.use(function (req, res, next) {

	console.log('all init---------------------', req.body)

  	// libera origens | cors
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, PROFIND");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  	// define retorno padrão
  	var response = {
		status:1,
		message:'', 
		data:null
	};

	res.response = response;

	// passa pro proximo controle
	next();
});


// tenta validar o token pra qualquer interaçção de put, post ou delete
router.post('/*', function(req, res, next){
	// se for o login ou registro, não precisa validar o token
	if(req.path == '/user/login' || req.path == '/user/register' || req.path == '/user/resetpass' || req.path == '/user/active')
		req.anon = true;
    //
    
	next(); // continua na validação do token
}, tokenService.TokenValidation);

router.put('/*', tokenService.TokenValidation);
router.delete('/*', tokenService.TokenValidation);




module.exports = router;