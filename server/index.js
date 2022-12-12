// server/index.js

const express = require("express");
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001;

const app = express();

var jsonParser = bodyParser.json()
var nodemailer = require('nodemailer');


app.post( "/adduser",jsonParser,(request,response) => {

  sendemail(request.body);

  });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function sendemail( body ){

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'xxx',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'xxx',
    to: body.email,
    subject: 'email app with details',
    text: "User name : " + body.name + " User height : " + body.height + "user email : " + body.email 
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })

}