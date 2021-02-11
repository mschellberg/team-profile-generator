const Employee = require("./Employee");
class Intern extends Employee { 
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
    getHtml() {
        return super.getHtml(this.name, this.getRole(), this.id, this.email, "School", this.school);
    }
}
module.exports = Intern;