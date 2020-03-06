const nodemailer = require("nodemailer");
require("dotenv").config();
const { PASSWORD, EMAIL } = process.env;
module.exports = {
  nodemailer(req, res) {
    const userEmail = req.body.email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD
      }
    });
    let messageBody = `This fires on register now! just need to build out the email confirmation backend / frontend. I figured while we're still making dummy data i'll just pass our e-mails. if this gets annoying I can still just bypass this entirely. also I need to find a way to actually pass an input email address to this. so theres that.

    http://localhost:3000/#/nodemailer/accept
    `;
    let mailOptions = {
      from: "faceplace333@gmail.com",
      to: "nhloder@gmail.com",
      cc: userEmail,
      bcc: "willhollingsworth15@yahoo.com",
      subject: "Please Confirm Your Email.",
      text: messageBody,
      path: 'http://localhost:3000/#/nodemailer/accept'
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("there was a problem", err);
      } else {
        console.log("Email Sent!!!");
      }
    }).catch(err => {
      console.log(err);
    });
  }
};
