const Manager = require("../lib/Manager");


describe("Manager", () => {
    test("should create a new Manager", () => {
        const manager = new Manager("Miguel", 93, "miguel@email.com", 1234567);
       
        expect(manager.name).toBe("Miguel");
        expect(manager.id).toBe(93);
        expect(manager.email).toBe("miguel@email.com");
        expect(manager.officeNumer).toBe(1234567);
        expect(manager.getRole()).toBe("Manager");
    });
})