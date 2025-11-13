function Customer(id, contactFname,contactLname,email,phoneNumber,mailingListOpt,lastPurchase) {
    this.id = id;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.mailingListOpt = mailingListOpt;
    this.contactFname = contactFname;
    this.contactLname = contactLname;
    this.lastPurchase = lastPurchase;
    this.createElement = function(){
        const customer = document.createElement('div');
        customer.classList.add('customer');
        customer.innerHTML = `
                <h4>${this.contactFname}, ${this.contactLname}</h4>
                <em>Id: ${this.id} </em>
                <em>Email: ${this.email}</em>
                <em>phone number: ${this.phoneNumber} </em>
                <em>opted into mailing list: ${this.mailingListOpt} </em>
                <em>Last Purchase Date: ${this.lastPurchase.toLocaleDateString()} </em>
            `;
        return customer;
    }
}