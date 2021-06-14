const Employee = require("./Employee.js");

class Manager extends Employee {
    
}

// In addition to Employee's properties and methods, Manager will also have the following:
// - officeNumber
// - getRole()—overridden to return 'Manager'