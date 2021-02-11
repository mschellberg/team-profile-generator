const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('Set name via argument', () =>{
    const name = 'Melanie';
    const id = 1;
    const email = "Mschellberg12@gmail.com";
    employee = new Employee(name, id, email);
    expect(employee.getName()).toEqual(name);
    expect(employee.getId()).toEqual(id);
    expect(employee.getEmail()).toEqual(email);
    expect(employee.getRole()).toEqual('Employee');
});

