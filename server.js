const inquirer = require('inquirer');
const mysql2 = require('mysql2');

inquirer
  .prompt([
    {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'color',
    message: 'What is your fav color?',
  },
  {
    type: 'input',
    name: 'food',
    message: 'What is your fav food?',
  },
]);