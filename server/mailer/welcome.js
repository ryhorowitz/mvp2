require('dotenv').config();
const path = require('path');
const cron = require("node-cron");
const nodemailer = require("nodemailer");

function welcomeMail(recipient) {
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  let messageOptions = {
    from: process.env.EMAIL_HOST,
    to: recipient,
    subject: 'Welcome to Cajun Word of the week Email',

    text: 'Thank you for joining Cajun Word of the week. Every Monday 9am EST',

    html: `<p><b>Thank you</b> for joining Cajun World of the week. Every Monday 9am EST</p>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div id="UE_unsubscribe"><p>Unsubcribe? please click here</p></div>
    `,
    // unsubscribe: {
    //   url: `${process.env.DEV_HOST}/unsubscribe`,
    //   comment: 'Unsubscribe'
    // },
  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      console.error('ERROR in transporter', error.message);
      return process.exit(1);
    } else {
      console.log('WELCOME Email successfully sent!');
      console.log(nodemailer.getTestMessageUrl(info));
      transporter.close();
    }
  });
}

module.exports = welcomeMail;