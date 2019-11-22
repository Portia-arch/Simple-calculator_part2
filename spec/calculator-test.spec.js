const { Calculator } = require('../src/calculator')

describe("calculate the total", function () {
    let calculator_instance = new Calculator();

    it("should sum the two numbers", function () {
        expect(calculator_instance.add(0, 0)).toBe(0);
    });

    it("should display the sum", function () {
        expect(calculator_instance.add(1, 2, 3, 4)).toBe(10)
    });

    it("should return 10", function () {
        expect(calculator_instance.add(2, 3, 5)).toBe(10)
    });

    it("should return 8", function () {
        expect(calculator_instance.add(3, 5)).toBe(8)
    });

});


describe("multiply two numbers", function () {
    let calculator_instance = new Calculator();

    it("should give product of two numbers", function () {
        expect(calculator_instance.multiply(1, 2)).toBe(2)
    });

    it("should return 60 ", function () {
        expect(calculator_instance.multiply(30, 2)).toBe(60)
    });

    it("should give the product of the array", function () {
        expect(calculator_instance.multiply(1, 2, 3, 4)).toBe(24)
    });
});