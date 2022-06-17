import fizzbuzz, {configFizzBuzz, CoolSpec, coolFizzBuzz, Sub, Spec} from "../src/fizzbuzz";

describe("Example Test Suite", () => {

    const coolSpec : CoolSpec = {
        subs: [
            (i) => i % 3 === 0 ? 'fizz' : undefined,
            (i) => i % 5 === 0 ? 'buzz' : undefined,
        ]
    }
    test.each([
        { i: 1, expected: "1" },
        { i: 2, expected: "2" },
        { i: 3, expected: "fizz" },
        { i: 5, expected: "buzz" },
        { i: 15, expected: "fizz buzz" },
    ])('$i = $expected', ({ i, expected }) => {
        expect(coolFizzBuzz(i, coolSpec)).toBe(expected);
    })

    // const classicSpec : Spec = {
    //     subs: [
    //         {multiple: 3, replacement: "fizz"},
    //         {multiple: 5, replacement: "buzz"}
    //     ]
    // }
    // test.each([
    //     { i: 1, expected: "1" },
    //     { i: 2, expected: "2" },
    //     { i: 3, expected: "fizz" },
    //     { i: 5, expected: "buzz" },
    //     { i: 15, expected: "fizz buzz" },        
    // ])('$i = $expected', ({ i, expected }) => {
    //     expect(configFizzBuzz(i, classicSpec)).toBe(expected);
    // })

    // test.each([
    //     {a: 1, b: 2, expected: 3},
    //     {a: 5, b: 2, expected: 7},
    // ])('$a + $b = $expected', ({a, b, expected}) => {
    //     expect(a + b).toBe(expected)
    // })
})