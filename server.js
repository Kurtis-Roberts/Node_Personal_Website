var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;
const nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var path = require('path');


app.set('view engine', 'ejs');
app.use(expressLayouts)

app.set('views', __dirname + '/views');

var router = require('./app/routes.js')

app.use('/', router)

app.use(express.static(__dirname + '/public/'))

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// app.listen(port, function() {
//     console.log('app running on port 8080')
// })
app.listen(process.env.PORT || port)

app.post('/send-email', function (req, res) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'kurtimus23@gmail.com',
            pass: 'Dani0615'
        }
    });
    let mailOptions = {
        // from: , // sender address
        to: 'kurtimus23@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body + req.body.name + ' &lt;' + req.body.email + '&gt;',
        html: req.body.body, // html body
        
    };
    

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        });
    });
        

 