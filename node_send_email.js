//Node.js Send an Email


/*
The Nodemailer Module
The Nodemailer module makes it easy to send emails from your computer.

The Nodemailer module can be downloaded and installed using npm:
*/

var nodemailer = require('nodemailer');



/*
Send an Email
Now you are ready to send emails from your server.

Use the username and password from your selected email provider to send an email.
This tutorial will show you how to use your Gmail account to send an email:

*/
// this isn working for me but i m an reaseching about this topic and will update the repo

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your@gmail.com',
    pass: 'yourpasswrd'
  }
});
// sending email to multiple users/ recepients

var mailOptions = {
	from: 'your email@gmail.com',
	to: 'friend1@gmail.com, friendx@amana.com',
	subject: 'Any subject  sent via NodeJS',
	html: '<h1>Some Heading</h1><p>This is the email body!</p>'
}

// sending email to single recepient

var mailOptions = {
	from: 'your email@gmail.com',
	to: 'friend1@gmail.com, friendx@amana.com',
	subject: 'Any subject  sent via NodeJS',

}
var mailOptions = {
  from: 'your@gmail.com',
  to: 'friends@gmail.com',// it can be any email
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});