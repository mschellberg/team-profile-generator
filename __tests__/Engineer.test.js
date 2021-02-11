const { test, expect } = require("@jest/globals");
const Engineer = require('../lib/Engineer');

test('Set name via argument', () =>{
    const name = 'Melanie';
    const id = 1;
    const email = "Mschellberg12@gmail.com";
    const github = 'mschellberg.github.com';
    engineer = new Engineer(name, id, email, github);
    expect(engineer.getName()).toEqual(name);
    expect(engineer.getId()).toEqual(id);
    expect(engineer.getEmail()).toEqual(email);
    expect(engineer.getGithub()).toEqual(github);
    expect(engineer.getRole()).toEqual('Engineer');
});