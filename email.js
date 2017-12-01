var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kamousavitest@gmail.com',
    pass: 'poopoo12'
  }
});



router.post('/', (req, res) => {
  console.log(req.body);
  var mailOptions = {
    from: 'kamousavitest@gmail.com',
    to: 'kamousavi@gmail.com',
    subject: 'Sending Email using Node.js',
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
});

module.exports = router;
