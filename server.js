const inquirer = require('inquirer');
const db = require('./db/connection')

// const userInput = '';

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
  if(response.options == 'add department'){
    inquirer.prompt([
      {
      type:'input',
      message:'Please type a department',
      name:'addDepartment',
    }]).then((response)=>{
      if(response.addDepartment == 'finance'){
        const sql = `INSERT INTO departments(name) VALUES('finance')`
        db.query(sql, function (err,results){
          console.table(results)
          return runMenu();
        })
      }
    })
  }

  if(response.options == 'add role'){
    inquirer.prompt([
      {
      type:'input',
      message:'Please type a role',
      name:'addRole',
    }]).then((response)=>{
      if(response.addRole == 'financial advisor'){
        const sql = `INSERT INTO roles(title,salary,department_id) VALUES('financial advisor','100000','4')`
        db.query(sql, function (err,results){
          console.table(results)
          return runMenu();
        })
      }
    })
  }

  if(response.options == 'add employee'){
    inquirer.prompt([
      {
      type:'input',
      message:'Please type employee full name',
      name:'addEmployee',
    }]).then((response)=>{
      if(response.addEmployee == 'Elon Musk'){
        const sql = `INSERT INTO employees(first_name,last_name,role_id,manager_id) VALUES('Elon','Musk','5','2')`
        db.query(sql, function (err,results){
          console.table(results)
          return runMenu();
        })
      }
    })
  }

  if(response.options === 'quit'){
    console.log('Application Ended. Have A Great Day!')
    process.exit();
  }
})
}








// INSERT INTO roles (title, salary, department_id)
//   VALUES 
//     ("Front End Dev", 200000.00, 1),
//     ("Web Dev Lead", 400000, 1),
//     ("Marketing Entry Level", 70000, 2),
//     ("UX Design Lead", 300000, 3)
//   ;











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
  if(response.options == 'add department'){
    inquirer.prompt([
      {
      type:'input',
      message:'Please type a department',
      name:'addDepartment',
    }]).then((response)=>{
      if(response.addDepartment == 'finance'){
        const sql = `INSERT INTO departments(name) VALUES('finance')`
        db.query(sql, function (err,results){
          console.table(results)
          runMenu();
        })
      }
    })
  }

  if(response.options == 'add role'){
    inquirer.prompt([
      {
      type:'input',
      message:'Please type a role',
      name:'addRole',
    }]).then((response)=>{
      if(response.addRole == 'financial advisor'){
        const sql = `INSERT INTO roles(title,salary,department_id) VALUES('financial advisor','100000','4')`
        db.query(sql, function (err,results){
          console.table(results)
          return runMenu();
        })
      }
    })
  }

  if(response.options == 'add employee'){
    inquirer.prompt([
      {
      type:'input',
      message:'Please type employee full name',
      name:'addEmployee',
    }]).then((response)=>{
      if(response.addEmployee == 'Elon Musk'){
        const sql = `INSERT INTO employees(first_name,last_name,role_id,manager_id) VALUES('Elon','Musk','5','2')`
        db.query(sql, function (err,results){
          console.table(results)
          return runMenu();
        })
      }
    })
  }

  if(response.options === 'quit'){
    console.log('Application Ended. Have A Great Day!')
    process.exit();
  }
});




