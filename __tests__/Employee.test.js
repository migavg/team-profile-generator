const Employee = require("../lib/Employee");


describe("Employee", () => {
    test("should create a new employee", () => {
        const employee = new Employee("Miguel", 93, "miguel@email.com");
       
        expect(employee.name).toBe("Miguel");
        expect(employee.id).toBe(93);
        expect(employee.email).toBe("miguel@email.com");
        expect(employee.getRole()).toBe("Employee");
    });
})