const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./mvp2.db', (err) => {
  if (err) {nvm
    return console.error(err.message);
  }
  console.log('Connected to the mvp2.db SQlite database.');
});


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

module.exports.db = db;