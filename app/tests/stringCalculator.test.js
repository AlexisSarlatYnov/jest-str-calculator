import { StringCalculator } from "../js/stringCalculator";

describe("Test sum of StringCalculator", () => {
    test('shoud return instance of StringCalculator', () => {
        let result = new StringCalculator();
        expect(result).toBeInstanceOf(StringCalculator);
    });
    test('test empty string should return 0', () => {
        let strCalcul = new StringCalculator();
        let somme = strCalcul.add('');
        expect(somme).toBe(0);
    });
    test('test string with 1 should return 1', () => {
        let strCalcul = new StringCalculator();
        let somme = strCalcul.add('1');
        expect(somme).toBe(1);
    });
    test('test string with 1 and 2 should return 3', () => {
        let strCalcul = new StringCalculator();
        let somme = strCalcul.add('1,2');
        expect(somme).toBe(3);
    });
    test('test string with 1, 2 and 3 should return 6', () => {
        let strCalcul = new StringCalculator();
        let somme = strCalcul.add('1,2,3');
        expect(somme).toBe(6);
    });
});

describe("Test differents delimiters", () => {
    test('test , and \\n with sum of 1, 2 and 3', () => {
        let strCalcul = new StringCalculator();
        let somme = strCalcul.add('1,2\n3');
        expect(somme).toBe(6);
    });
});
