const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

async function getCoreValues() {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
        {
            type: 'text',
            name: 'id',
            message: 'What is your ID?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is you role?',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ]
        },
    ]);
}

async function getExtraValues(role) {
    let roleQuestion = '';
    if (role === "Manager") {
        roleQuestion = "What is your office number?"
    } else if (role === "Engineer") {
        roleQuestion = "What is your github?"
    } else if (role === "Intern") {
        roleQuestion = "What school did you go to?"
    }
    return inquirer.prompt([{
        type: 'text',
        name: 'roleQuestion',
        message: roleQuestion
    }, {
        type: 'list',
        name: 'continueAddingEmployees',
        message: 'Do you wish to add more employees',
        choices: [
            "Y",
            "N"
        ]
    }
    ]);
};

async function getEmployee() {
    const coreValues = await getCoreValues();
    const extraValue = await getExtraValues(coreValues['role']);
    const name = coreValues['name'];
    const id = coreValues['id'];
    const email = coreValues['email'];
    const role = coreValues['role'];
    const roleAnswer = extraValue['roleQuestion'];
    let retObject;
    if (role === 'Manager') {
        retObject = new Manager(name, id, email, roleAnswer);
    } else if (role === 'Engineer') {
        retObject = new Engineer(name, id, email, roleAnswer)
    } else if (role === 'Intern') {
        retObject = new Intern(name, id, email, roleAnswer)
    }
    retObject.continueAddingEmployees = extraValue['continueAddingEmployees'];
    return retObject;
}

async function getEmployees() {
    const employees = [];
    while (true) {
        const employee = await getEmployee();
        employees.push(employee);
        if (employee.continueAddingEmployees == 'N') {
            return employees;
        }
    }

}

async function writeFile() {
    const employees = await getEmployees();
    const beginText = fs.readFileSync('begin.txt');
    const endText = fs.readFileSync('end.txt');
    let employeeText = '';
    for (let employee of employees) {
        employeeText = employeeText + employee.getHtml();
    }
    fs.writeFileSync('index.html',  beginText + employeeText + endText);
}

writeFile();
//getEmployees();