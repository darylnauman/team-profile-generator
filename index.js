const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./Employee.js')

// Below is just example of inquirer format/syntax
const questions = [
    {
        type: 'input',
        message: "What is team manager's name? ",
        name: 'managerName',
    }
];

inquirer
    .prompt(
        questions
    )
    .then((response) => {
        console.log(response);
    })