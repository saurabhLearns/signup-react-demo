import { validateEmail, checkPasswordMatch } from './UserDetails';

describe("email test", () => {
    test("Check if input given", () => {
        const email = '';
        expect(validateEmail(email)).toBe(false);
    });
    test("check if @ is present", () => {
        const email = 'saurabh.com';
        expect(validateEmail(email)).toBe(false);
    });
    test("check if . is present after @", () => {
        const email = 'saurabh.@com';
        expect(validateEmail(email)).toBe(false);
    });
    test("check if whole email is valid", () => {
        const email = 'saurabh@jagtap.com';
        expect(validateEmail(email)).toBe(true);
    });
});

describe("validate password strengths", () => {
    test.todo("Write test to validate strength of password");
});

describe("Password validations", () => {
    test("check if passwords are empty strings", () => {
        const firstPassword = '';
        const secondPassword = '';
        expect(checkPasswordMatch(firstPassword, secondPassword)).toBe(false);
    });
    test("check if passwords are matching or not", () => {
        const firstPassword = 'password123';
        const secondPassword = 'password123';
        expect(checkPasswordMatch(firstPassword, secondPassword)).toBe(true);
    });
});