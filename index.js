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

function getEmployeeData (role) {

    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is the ${role}'s name? `,
                name: 'name'
            },
            {
                type: 'number',
                message: `What is the ${role}'s ID? `,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is the ${role}'s email? `,
                name: 'email',
            },
            {
                type: 'input',
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
            // console.log(response);
            let newEmployee= {};

            switch (role) {
                case 'manager':
                    newEmployee = new Manager(response.name, response.id, response.email, response.officeNumber);
                    break;
                case 'engineer':
                    newEmployee = new Engineer(response.name, response.id, response.email, response.github);
                    break;
                case 'intern':
                    newEmployee = new Intern(response.name, response.id, response.email, response.school);
                    break;
                default:
                    throw new Error('unknown employee role');
            }
            
            // add new employee to array of all employees
            members.push(newEmployee);
            
            console.log(`Current details of all employees:`);
            members.forEach(employee => console.log(employee));

            addEmployeePrompt();

        })
}

function addEmployeePrompt () {
    inquirer
        .prompt([
            {
                type: 'list',
                message: `What do you wish to do next?`,
                name: 'nextStep',
                choices: ['Add an engineer', 'Add an intern', 'Build my team']
            }
        ])
        .then((response) => {
            // console.log(response);
            
            switch (response.nextStep) {
                case 'Add an engineer':
                    getEmployeeData('engineer');
                    break;
                case 'Add an intern':
                    getEmployeeData('intern');
                    break;
                case 'Build my team':
                    // render page soon
                    break;
                default:
                    throw new Error('error within addEmployeePrompt')
            }
        })  
}

function init () {
    console.log('Begin by entering manager information.');
    getEmployeeData('manager');
}

init();


// manager.getName()  <== when writing to file, etc.

// const manager = new Manager(response.name)
// const newEmployee = {
//     name: manager.getName(),
//     id: manager.getId()
//     role: manager.getRole()