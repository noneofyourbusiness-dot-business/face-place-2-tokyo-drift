const nodemailer = require("nodemailer");
require("dotenv").config();
const { PASSWORD, EMAIL } = process.env;
module.exports = {
  nodemailer() {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD
      }
    });
    let messageBody = `it works! still need to figure out how to pass info make links, buttons, etc. in here but hey we've made progress
    http://localhost:3000/#/nodemailer/accept
    `;
    let mailOptions = {
      from: "faceplace333@gmail.com",
      to: "nhloder@gmail.com",
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
    });
  }
};
