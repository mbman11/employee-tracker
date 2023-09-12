const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: 'secretpasswordMaxbman1',
    database: 'employeeTracker_db'
  },
  console.log(`Connected to the database.`)
);

// Query database
// db.query('SELECT * FROM departments', function (err, results) {
//   console.table(results);
// });


module.exports = db;