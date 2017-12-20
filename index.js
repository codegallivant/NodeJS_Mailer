var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'janak3.1415et@gmail.com',
    pass: '@IloveGOOGLE5426'
  }
});

var mailOptions = {
  from: 'janak3.1415et@gmail.com',
  to: 'janak3.1415et@gmail.com',
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