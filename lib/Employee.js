class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // These are the methods to the properties above
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
    getHtml(name, role, id, email, otherLabel, other) {
        return `
        <div class="col mb-4">
        <div class="card">
            <div class="card-top">
            <h2>${name}</h2>
            <h2>${role}</h2>
            </div>
            <div class="card-bottom">
              <p class="id">ID: ${id}</p>
              <p class="email">Email: ${email}</p>
              <p class="roleAnswer">${otherLabel}: ${other}</p>
          </div>
          </div>
          </div>`;
    }
}


module.exports = Employee;
