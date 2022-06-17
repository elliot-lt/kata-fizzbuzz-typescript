import fizzbuzz from "../src/fizzbuzz";

describe("Example Test Suite", () => {
    it("Does something", () => {
        expect(fizzbuzz(1)).toBe("")
    })

    test.each([
        {a: 1, b: 2, expected: 3},
        {a: 5, b: 2, expected: 7},
    ])('$a + $b = $expected', ({a, b, expected}) => {
        expect(a + b).toBe(expected)
    })
})