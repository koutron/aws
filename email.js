var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var keys = require('./keys.js');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: keys.email,
    pass: keys.password
  }
});



router.post('/', (req, res) => {
  console.log(req.body);
  var mailOptions = {
    from: 'kamousavitest@gmail.com',
    to: 'kamousavi@gmail.com',
    subject: 'CONTACT EMAIL',
    text: `Name: ${req.body.name} \n
          Email: ${req.body.email} \n
          Phone: ${req.body.phone} \n
          Message: ${req.body.message}`
  };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
res.redirect('http://kouroscodes.com/thankyou');
});

module.exports = router;
