function Supplier(id,suppliername,zipcode,contactFname,contactLname,email, lastDeliveryDate,isActive) {
    this.id = id;
    this.suppliername = suppliername;
    this.email = email;
    this.zipcode = zipcode;
    this.contactFname = contactFname;
    this.contactLname = contactLname;
    this.lastDeliveryDate = lastDeliveryDate;
    this.isActive = isActive;
    this.createElement = function(){
        const supplier = document.createElement('div');
        supplier.classList.add('supplier');
        supplier.innerHTML = `
                <h4>${this.suppliername}</h4>
                <em>Id:${this.id}</em>
                <em>Email: ${this.email}</em>
                <em>zipcode: ${this.zipcode} </em>
                <em>Contact First Name: ${this.contactFname}</em>
                <em>Contact Last Name: ${this.contactLname} </em>
                <em>Last Delivery Date: ${this.lastDeliveryDate.toLocaleDateString()}</em>
                <em>is active: ${this.isActive}</em>
            `;
        return supplier;
    }
}