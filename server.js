var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;


app.set('view engine', 'ejs');
app.use(expressLayouts)

app.set('views', __dirname + '/views');

var router = require('./app/routes.js')

app.use('/', router)

app.use(express.static(__dirname + '/public/'))


app.listen(port, function() {
    console.log('app running on port 8080')
})
