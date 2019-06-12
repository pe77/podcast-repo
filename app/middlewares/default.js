var _			= require('underscore');
var config      = require('config');

// Disparador de erro padrão como esta escrito no nome da função.
// Eu nem precisaria esta comentando isso.
var DefaultErrorResponse = function(err, response)
{
	// retorno padrão de erro
	var responseDefault = {
		status:-2,
		data:null,
		message:err.message
	}

	// sobre escreve padrão
	response = response ? _.defaults(response, responseDefault) : responseDefault;

	return response;
}

module.exports.DefaultErrorResponse = DefaultErrorResponse;


// retorno padrão
module.exports.DefaultResponsePrint = function(req, res, next)
{
    // - as mensagens
    res.response.message = res.response.message;

    // devolve resposta
    res.json(res.response);

    return next();
}
