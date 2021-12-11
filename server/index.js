require('dotenv').config();
const express = require('express');
const app = express();
const formidable = require('formidable');
// const db = require('./db/index');
// const { addUser } = require('./db/index');
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
    db.run(`INSERT INTO users VALUES (NULL,?,?,?,?)`,
      [fields.firstname, fields.lastname, fields.username, fields.password],
      (err, rows) => {
        if (err) {
          return console.log(err.message);
        }
        console.log(`A row has been inserted with rowid ${this}`);
      }
    );
  });
});

app.listen(PORT, '127.0.0.1', (err) => {
  if (err) console.error('ERROR IN SERVER LISTEN', err);
  console.log(`Server listening at http://localhost:${PORT}`)
})