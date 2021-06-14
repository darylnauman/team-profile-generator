const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js');

const members = [];

// manager - first
// employee - name, id, email
// ask role specific questions
// create object (manager, intern, engineer)
// push to array of employees

let role = 'engineer';

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the employee's name? ",
            name: 'name'
        },
        {
            type: 'number',
            message: "What is the employee's ID? ",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the employee's email? ",
            name: 'email',
        },
        {
            type: 'number',
            message: "What is the manager's office number? ",
            name: 'officeNumber',
            when: role === 'manager'
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username? ",
            name: 'github',
            when: role === 'engineer'
        },
        {
            type: 'input',
            message: "What is the intern's school? ",
            name: 'school',
            when: role === 'intern'
        }
    ])
    .then((response) => {
        console.log(response);

        // const manager = new Manager(response.name)
        // const newEmployee = {
        //     name: manager.getName(),
        //     id: manager.getId()
        //     role: manager.getRole()
        // }
        // members.push(newEmployee)

    })


// manager.getName()  <== when writing to file, etc.