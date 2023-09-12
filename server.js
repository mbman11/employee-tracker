const inquirer = require('inquirer');
// const express = require('express');
// const app = express();
const db = require('./db/connection')

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


const menu = inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['view all departments','view all roles', 'view all employees'],
    },
  ])
.then((response)=>{
  if(response.options === 'view all departments'){
    db.query('SELECT * FROM departments', function (err, results) {
      console.table(results);
    });
  }
  if(response.options === 'view all roles'){
    db.query('SELECT * FROM roles', function (err, results) {
      console.table(results);
    });
  }
  if(response.options === 'view all employees'){
    db.query('SELECT * FROM employees', function (err, results) {
      console.table(results);
    });
  }
})


