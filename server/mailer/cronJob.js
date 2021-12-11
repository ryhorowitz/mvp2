require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

cron.schedule('0 0 * * 1', function () {
  console.log('---------------------');
  console.log('Running Cron Job EVERY MONDAY');

  let messageOptions = {
    from: process.env.EMAIL_HOST,
    to: process.env.EMAIL_HOST,
    subject: 'Scheduled Email',
    text: 'Hi there. This email was automatically sent by us.'
  };

  transporter.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email successfully sent!');
    }
  });
});