const Employee = require('../lib/Employee.js')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguements", () => {
            const employee = new Employee("Frank", 1, "frank@company.com");

            expect(employee.name).toEqual("Frank");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("frank@company.com");
        })
    })

    describe("getName", () => {
        it("should return a string of the employee's name", () => {
            const employee = new Employee("Sally", 2, "sally@company.com");
            expect(employee.getName()).toEqual("Sally");
        })
    })
    
    describe("getID", () => {
        it("should return a number that matches employee's ID", () => {
            const employee = new Employee("Jon", 3, "jon@company.com");

            expect(employee.getId()).toEqual(3);
        })
    })
    
    describe("getEmail", () => {
        it("should return a string of the employee's email", () => {
            const employee = new Employee("Patrick", 4, "patrick@company.com");
            expect(employee.getEmail()).toEqual("patrick@company.com");
        })
    })

    describe("getRole", () => {
        it("should return 'Employee' as the initial role", () => {
            const employee = new Employee("Jug", 5, "jug@company.com");
            expect(employee.getRole()).toEqual("Employee");
        })
    })
})