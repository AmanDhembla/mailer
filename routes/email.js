var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  secure: true,
  pool:true,
  direct:false,
  auth: {
    user: process.env.email,
    pass: process.env.password
  }
});
module.exports=function sendEmail(sendto,sendsubject,message){
  var mailOptions = {
    from: 'helpinghands11042017@gmail.com',
    to:sendto,
    subject:sendsubject,
    html:message
  };
  console.log(sendto);
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
