var nodemailer = require('nodemailer');
var express = require('express');
var router = express.Router();



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kamousavitest@gmail.com',
    pass: 'poopoo12'
  }
});

var mailOptions = {
  from: 'kamousavitest@gmail.com',
  to: 'kamousavi@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

router.get('/message', (req, res) => {
  console.log(req);
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});

module.exports = router;
