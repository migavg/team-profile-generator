const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    test("should create a new Engineer", () => {
    const engineer = new Engineer("Miguel", 93, "miguel@email.com", "migavg");
    
    expect(engineer.name).toBe("Miguel");
    expect(engineer.id).toBe(93);
    expect(engineer.email).toBe("miguel@email.com");
    expect(engineer.userName).toBe("migavg");
    expect(engineer.getRole()).toBe("Engineer");
    });
})