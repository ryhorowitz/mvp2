const express = require('express');
const app = express();
const formidable = require('formidable');
const db = require('./db/index');
const PORT = 3000;


app.use(express.static(__dirname + './../public/distro'));

app.post('/signup', (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    console.log({fields, files});
    res.json({ fields, files });
  });
});

app.listen(PORT, '127.0.0.1', (err) => {
  if (err) console.error('ERROR IN SERVER LISTEN', err);
  console.log(`Server listening at http://localhost:${PORT}`)
})