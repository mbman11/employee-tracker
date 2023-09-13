const inquirer = require('inquirer');
const db = require('./db/connection')

const userInput = '';

function runMenu () {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['view all departments','view all roles', 'view all employees','add department','add role','add employee','quit'],
    },
  ])
  .then((response)=>{
  if(response.options === 'view all departments'){
    db.query('SELECT * FROM departments', function (err, results) {
      console.table(results);
      return runMenu();
    });
  }
  if(response.options === 'view all roles'){
    db.query('SELECT * FROM roles', function (err, results) {
      console.table(results);
      return runMenu();
    });
  }
  if(response.options === 'view all employees'){
    db.query('SELECT * FROM employees', function (err, results) {
      console.table(results);
      return runMenu();
    });
  }
  // if(response.options == 'add department'){
  //   inquirer.prompt([
  //     {
  //     type:'input',
  //     message:'Please type a department',
  //     name:'addDepartment',
  //   }]).then((response)=>{
  //     if(response.addDepartment == 'sales'){
  //       const sql = `INSERT INTO departments(name) VALUES('sales')`
  //       db.query(sql, function (err,results){
  //         console.table(results)
  //         return runMenu();
  //       })
  //     }
  //   })
  // }
  if(response.options === 'quit'){
    console.log('Application Ended. Have A Great Day!')
    process.exit();
  }
})
}




inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['view all departments','view all roles', 'view all employees','add department','add role','add employee','quit'],
    },
  ])  
  .then((response)=>{
  if(response.options === 'view all departments'){
    db.query('SELECT * FROM departments', function (err, results) {
      console.table(results);
      if(response){
        runMenu();
      }
    });
  }
  if(response.options === 'view all roles'){
    db.query('SELECT * FROM roles', function (err, results) {
      console.table(results);
      if(response){
        runMenu();
      }
    });
  }
  if(response.options === 'view all employees'){
    db.query('SELECT * FROM employees', function (err, results) {
      console.table(results);
      if(response){
        runMenu();
      }
    });
  }
  // if(response.options == 'add department'){
  //   inquirer.prompt([
  //     {
  //     type:'input',
  //     message:'Please type a department',
  //     name:'addDepartment',
  //   }]).then((response)=>{
  //     if(response.addDepartment == 'sales'){
  //       db.query(userInput, function (err,results){
  //         console.table(results)
  //         return runMenu();
  //       })
  //     }
  //   })
  // }
  if(response.options === 'quit'){
    console.log('Application Ended. Have A Great Day!')
    process.exit();
  }
});




