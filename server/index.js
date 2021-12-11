require('dotenv').config();
const express = require('express');
const app = express();
const formidable = require('formidable');
const cron = require("node-cron");
const sendMail = require('./mailer/cronJob');
const welcomeMail = require('./mailer/welcome');
const PORT = 3000;



app.use(express.static(__dirname + './../public/distro'));

const sqlite3 = require('sqlite3').verbose();

// open database on drive/file
let db = new sqlite3.Database('./mvp2.db', (err) => {
  if (err) {
    nvm
    return console.error(err.message);
  }
  console.log('Connected to the mvp2.db SQlite database.');
});

//ROUTES
app.post('/signup', (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(fields);
    res.json({ fields });
    // console.log('DB is', db);

    // may need to type the columns into the below query.
    db.run(`INSERT INTO users VALUES (NULL,?,?,?)`,
      [fields.firstname, fields.lastname, fields.email],
      (err, row) => {
        if (err) {
          return console.log(err.message);
        }
        console.log(`A row has been inserted!`);
      }
    );
  });
});

app.post('/unsubscribe', (req, res) => {
  const form = formidable();
  //search db for req.body
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log(Object.values(fields).join(''));
    let email = Object.values(fields).join('')
    db.all(`DELETE FROM users WHERE email=?`, [email], (err, row) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`USER has been removed`);
      ;
    })

    res.json(`Email ${email} has been removed`);
  });

})

app.get('/welcome', (req, res) => {
  req.body;
  db.get(`SELECT email FROM users
          ORDER BY id DESC`,
    (err, row) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`An email has been found`, row.email);
      welcomeMail(row.email);
    }
  );
  res.status(200).end();
})

cron.schedule("* 9 * * * 1", function () {
  console.log('---------------------');
  console.log('Running Cron Job EVERY MONDAY 9AM');
  sendMail();
});

cron.schedule("*/15 * * * * *", function () {
  let data = `${new Date().toUTCString()}
                : Server is working\n`;
  console.log('Server is running: ', data);
});

sendMail()

app.listen(PORT, '127.0.0.1', (err) => {
  if (err) console.error('ERROR IN SERVER LISTEN', err);
  console.log(`Server listening at http://localhost:${PORT}`)
})