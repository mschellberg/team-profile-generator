const { test, expect } = require("@jest/globals");
const Intern = require('../lib/Intern');

test('Set name via argument', () =>{
    const name = 'Melanie';
    const id = 1;
    const email = "Mschellberg12@gmail.com";
    const school = '2University';
    intern = new Intern(name, id, email, school);
    expect(intern.getName()).toEqual(name);
    expect(intern.getId()).toEqual(id);
    expect(intern.getEmail()).toEqual(email);
    expect(intern.getSchool()).toEqual(school);
    expect(intern.getRole()).toEqual('Intern');
});