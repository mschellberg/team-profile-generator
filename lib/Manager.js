const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
    getHtml() {
        return super.getHtml(this.name, this.getRole(), this.id, this.email, "Office Number", this.officeNumber);
    }
}
module.exports = Manager;