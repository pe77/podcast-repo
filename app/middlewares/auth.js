var config = require('config');
var _ = require('lodash');

// valida o token
module.exports.TokenValidation = function(req, res, next){

	// se for uma requisição anonima, pula a checagem do token
	if(req.anon)
		return next();
	//


	if(!_.has(req.headers, 'Authorization'))
	{
		res.response.status = 0;
		res.response.message = 'Token inválido!';
		res.json(res.response);
		return;
	}

	var authorization = req.headers['Authorization'];

	if(authorization == '' || authorization.indexOf('bs ') != 0 || authorization.length == 3)
	{
		res.response.status = 0;
		res.response.message = 'Token inválido!';
		res.json(res.response);
		return;
	}

    var token = authorization.split(' ')[1];
    

    if(token != config.app.secret)
    {
        res.response.status = 0;
        res.response.message = 'Token inválido!';
        res.json(res.response);
        return;
    }


    return next();
}