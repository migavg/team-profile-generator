const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    test("should create a new Engineer", () => {
    const employee = new Engineer("Miguel", 93, "miguel@email.com");

    expect(employee.name).toBe("Miguel")
    expect(employee.id).toBe(93)
    expect(employee.email).toBe("miguel@email.com")
    expect(employee.getRole()).toBe("Engineer")
    });
})