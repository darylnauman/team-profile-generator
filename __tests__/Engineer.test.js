const Engineer = require('../lib/Engineer.js')

describe("Engineer", () => {
    
    describe("Initialization", () => {
        it("should create an object with name, id, email, school", () => {
            const engineer = new Engineer("Justin", 9, "justin@company.com", "justin");
            expect(engineer).toEqual({ name: "Justin", id : 9, email: "justin@company.com", github: "justin"})
        })
    })

    describe("getGithub", () => {
        it("should return correct value of the engineer's GitHub profile name", () => {
            const engineer = new Engineer("Justin", 9, "justin@company.com", "justin");
            expect(engineer.getGithub()).toEqual("justin")
        })
    })
    
    describe("getRole", () => {
        it("should return 'Engineer' as the role", () => {
            const engineer = new Engineer("Justin", 9, "justin@company.com", "justin");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});