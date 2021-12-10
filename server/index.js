const express = require('express');
const app = express();
const db = require('./db/index');
const PORT = 3000;


app.use(express.static(__dirname + './../public/distro'));



app.listen(PORT, '127.0.0.1', (err) => {
  if (err) console.error('ERROR IN SERVER LISTEN', err);
  console.log(`Server listening at http://localhost:${PORT}`)
})