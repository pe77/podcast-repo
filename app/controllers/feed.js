var express 	= require('express');
var config 		= require('config');
var handlers	= require('../middlewares/default.js');

const podcast   = require('../services/podcast');

var fs 			= require('fs');
var fse     	= require('fs-extra');

// bla
var router 		= express.Router();


// devolve o feed
router.get(config.http.basepath+'/podcast/rss.xml', function (req, res, next) {
    console.log('foi feed');

    // res.response.data = podcast.Generate();
    
    // res.contentType('application/rss+xml')
    res.contentType('application/xml')
    res.send(podcast.GetFeed());

    return next();
});


module.exports = router