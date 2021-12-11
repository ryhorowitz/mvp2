require('dotenv').config();



const addUser = (formData) => {
  return db.run("INSERT INTO users ", {
    $firstname: formData.firstname,
    $lastname: formData.lastname,
    $username: formData.username,
    $password: formData.password
  })
}

// close the database connection
// db.close((err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });

// const knex = require('knex')({
//   client: 'sqlite3',
//   connection: () => ({
//     filename: process.env.DB_HOST
//   })
// });

module.exports.models = { addUser };


