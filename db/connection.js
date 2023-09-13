const mysql = require('mysql2');


const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',

    password: 'secretpasswordMaxbman1',
    database: 'employeeTracker_db'
  },
  console.log(`Welcome to the employee tracker! Use the arrow keys to get started.`)
);

// Query database
// db.query('SELECT * FROM departments', function (err, results) {
//   console.table(results);
// });


module.exports = db;