const Intern = require('../lib/Intern.js')

describe("Intern", () => {
    
    describe("Initialization", () => {
        it("should create an object with name, id, email, school", () => {
            const intern = new Intern("Billy", 8, "billy@company.com", "University of Toronto");
            expect(intern).toEqual({ name: "Billy", id : 8, email: "billy@company.com", school: "University of Toronto"})
        })
    })

    describe("getSchool", () => {
        it("should return correct value of the intern's school", () => {
            const intern = new Intern("Billy", 8, "billy@company.com", "University of Toronto");
            expect(intern.getSchool()).toEqual("University of Toronto")
        })
    })
    
    describe("getRole", () => {
        it("should return 'Intern' as the role", () => {
            const intern = new Intern("Billy", 8, "billy@company.com", "University of Toronto");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
});