const Employee = require("./Employee.js");

class Engineer extends Employee {
    
}

// In addition to Employee's properties and methods, Engineer will also have the following:
// - github—GitHub username
// - getGithub()
// - getRole()—overridden to return 'Engineer'