var express = require('express');
var path = require('path')

var router = express.Router();


router.get('/', function(req, res){
    res.render('pages/index')
});


router.get('/portfolio', function(req, res){
    res.render('pages/portfolio')
});


router.get('/contact', function(req, res){
    res.render('pages/contact')
});
router.post('/contact', function(req, res){

});



module.exports = router;