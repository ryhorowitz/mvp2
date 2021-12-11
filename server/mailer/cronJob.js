require('dotenv').config();
const path = require('path');
const cron = require("node-cron");
const nodemailer = require("nodemailer");

function sendMail() {
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
    to: process.env.EMAIL_USER,
    subject: 'Cajun Word of the week Email',

    text: 'Hi there. This email was automatically sent by us.',

    html: `<p><b>Hello</b> there</p>
      <p>your Cajun word of the week is <b>BABILLER</b></p>
      <p><i>babiller</i> (v.t.) [BAH-BEE-YEH] to scold [usually a child].</p>
      <p>Click here for an <a href="https://www.lsu.edu/hss/french/files/French%20cajun%20french%202/item49660.wav">Pronounciation</a></p>`,

  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      console.error('ERROR in transporter', error.message);
      return process.exit(1);
    } else {
      console.log('Weekly Email successfully sent!');
      console.log(nodemailer.getTestMessageUrl(info));
      transporter.close();
    }
  });
}

// cron.schedule('* * * * 1', function () {
//   console.log('---------------------');
//   console.log('Running Cron Job EVERY MONDAY 9AM');
//   sendMail();
//   });

module.exports = sendMail
