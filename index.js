var nodemailer = require('nodemailer');
var config = require('./config');

var transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS
  }
});

var mailOptions = {
  from: process.env.EMAIL_AUTH_USER,
  to: process.env.EMAIL_RECIPIENT,
  subject: 'Sending Email using cool Node.js',
  text: 'I sent this mail through cool Node.js server!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});