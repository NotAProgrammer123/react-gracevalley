const express = require('express');
const bodyParser = require("body-parser");
const axios = require('axios');
const nodemailer = require('nodemailer');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const port = 3001;
const host = '192.168.43.99';

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(cors());

server.listen(port, host, () => {
    console.log('Listening on Port ' + port);
  });

  app.post('/sendmail', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    let [username, email, message, subject] = [req.body.data.username, req.body.data.email, req.body.data.message, req.body.data.subject];

    function Mail () {

    
    let msgName = "Name: " + username;
    let msgEmail = "E-mail: " + email;
    let msgMessage = "Message: " + message;
    let msgSubject = "Subject: " + subject;
    let sMessage = msgName + "\n" + "\n" + msgEmail + "\n" + "\n" +  msgSubject + "\n" + "\n" + msgMessage;
    
    let transporter = nodemailer.createTransport ({
        service: 'gmail',
        auth: {
            user: 'gracevalleybook@gmail.com',
            pass: 'pgcojnlxdzvpdgvy'
        }
    });
    
    let mailOptions = {
        from: 'gracevalleybook@gmail.com',
        to: 'gracevalleybook@gmail.com',
        subject: 'Message from visitor on www.gracevalleybook.com',
        text: sMessage
    };
     
    transporter.sendMail(mailOptions, function (error, info){
        if(error) {
          res.send({resp: 'An Error Occured. Please Try Again'});
        } else {
          res.send({resp: 'Message Sent Successfully!'});
        }
    });
    }
    Mail();
  });