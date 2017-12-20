var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'FromEmail',
  to: 'ToEmail',
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
