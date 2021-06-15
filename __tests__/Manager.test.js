// const Employee = require('../lib/Employee.js')
const Manager = require('../lib/Manager.js')

describe("Manager", () => {
    
    describe("Initialization", () => {
        it("should create an object with name, id, email, officeNumber", () => {
            const manager = new Manager("Tony", 6, "tony@company.com", "A12");
            expect(manager).toEqual({ name: "Tony", id : 6, email: "tony@company.com", officeNumber: "A12"})
        })
    })
    
    describe("getRole", () => {
        it("should return 'Manager' as the role", () => {
            const manager = new Manager("Tony", 6, "tony@company.com", "A12");
            expect(manager.getRole()).toEqual("Manager");
        });
    });
});