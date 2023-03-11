const Intern = require("../lib/Intern");


describe("Intern", () => {
    test("should create a new Intern", () => {
        const intern = new Intern("Miguel", 93, "miguel@email.com","edX");
       
        expect(intern.name).toBe("Miguel");
        expect(intern.id).toBe(93);
        expect(intern.email).toBe("miguel@email.com");
        expect(intern.school).toEqual("edX");
        expect(intern.getRole()).toBe("Intern");
    });
})