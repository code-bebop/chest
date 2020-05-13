const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      path = require('path'),
      nodemailer = require('nodemailer');

// view engine setup
app.set('view engine', 'ejs');

// public directory setup
app.use('/public', express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// index route
app.get("/", (req, res) => {
    res.redirect("/contact");
});

// render contact form
app.get("/contact", (req, res) => {
    res.render("contact");
});

// post route
app.post("/contact", (req, res) => {
    const output = `
        <p>무려<p>
        <p>포트폴리오 페이지를 통해 이메일을 보낸 사람이 있습니다.</p>
        <h3>상세 정보</h3>
        <ul> 
            <li>전화번호: ${req.body.phone}</li>
            <li>이메일: ${req.body.email}</li>
            <li>제목: ${req.body.subject}</li>
        </ul>
        <h3>내용:</h3>
        <p>${req.body.message}</p>
    `
    
// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: 'true',
        auth: {
            user: 'woonj2@gmail.com', // could use generated ethereal user
            pass: '798954zx'  // could use generated ethereal password
        },
        tls:{
          rejectUnauthorized:false
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
      from: '"portfolio" <node.mailer.smtp@gmail.com>', // sender address
      to: 'woonj2@gmail.com', // list of receivers
      subject: 'from node app', // Subject line
      text: 'hi there', // plain text body
      html: output // html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);   
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
          res.redirect('/contact');
    });
});


//  starts a UNIX socket and listens for connections on the given path
app.listen(3000, () => {
    console.log("실행 중...");
});