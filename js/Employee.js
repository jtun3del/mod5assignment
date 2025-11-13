function Employee(id,fname,lname,email,department,hireDate,terminationDate) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.department = department;
    this.hireDate = hireDate;
    this.terminationDate = terminationDate;
    this.createElement = function(){
        const employee = document.createElement('div');
        employee.classList.add('employee');
        employee.innerHTML = `
                <h4>${this.fname}, ${this.lname}</h4>
                <em>ID: ${this.id}, </em>
                <em>Email: ${this.email}, </em>
                <em>Department: ${this.department}, </em>
                <em>Hire Date: ${this.hireDate.toLocaleDateString()}, </em>
                <em>Termination Date: ${this.terminationDate == null ? "Still Employed" : this.terminationDate.toLocaleDateString()} </em>
            `;
        return employee;
    }
}