const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('Set name via argument', () =>{
    const name = 'Melanie';
    const id = 1;
    const email = "Mschellberg12@gmail.com";
    const officeNumber = 10;
    manager = new Manager(name, id, email, officeNumber);
    expect(manager.getName()).toEqual(name);
    expect(manager.getId()).toEqual(id);
    expect(manager.getEmail()).toEqual(email);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
    expect(manager.getRole()).toEqual('Manager');
});