
$(function() {





    /*$("#employee-form")[0].classList.add("hidden");
    $("#supplier-form")[0].classList.add("hidden");
    $("#customer-form")[0].classList.add("hidden"); */
    $(".people-form>form").addClass("hidden");

    employees.forEach(function(emp) {
        $(".employees-list").append(emp.createElement());
    })
    suppliers.forEach(function(emp) {
        $(".suppliers-list").append(emp.createElement());
    })
    customers.forEach(function(emp) {
        $(".customers-list").append(emp.createElement());
    })
    $(".people-list>div").addClass("hidden");

    $("#people-choice").on("change", function(e) {
        let selectedForm = e.target.value;
        $(".people-form>form").addClass("hidden");
        switch(selectedForm) {
            case "employee":
                selectedForm = "#employee-form";
                break;
            case "supplier":
                selectedForm = "#supplier-form";
                break;
            case "customer":
                selectedForm = "#customer-form";
                break;
        }
        $(selectedForm)[0].classList.remove("hidden");

    })
    $("#people-display-choice").on("change", function(e) {
        let target = e.target.value
        switch(target) {
            case "employee":
                target = ".employees-list";
                break;
            case "supplier":
                target = ".suppliers-list";
                break;
            case "customer":
                target = ".customers-list";
                break;
        }
        console.log(target)
        if (e.target.value === "all") {
            $(".people-list>div").removeClass("hidden");
        }
        else {
            $(".people-list>div").addClass("hidden");
            $(target).removeClass("hidden");
        }



    })
    document.getElementById('employee-form').addEventListener('submit', function(e){
        event.preventDefault();
        const newemployee = new Employee(this.querySelector('#employee-id').valueAsNumber, this.querySelector('#employee-fname').value
        , $("#employee-lname")[0].value, $("#employee-email")[0].value,$("#employee-department")[0].value,
            $("#employee-hiredate")[0].valueAsDate, $("#employee-termination")[0].valueAsDate);
        employees.push(newemployee);
        $(".employees-list").append(newemployee.createElement())
        this.reset()
    });
    document.getElementById('supplier-form').addEventListener('submit', function(e){
        event.preventDefault();
        const newsupplier = new Supplier(this.querySelector('#supplier-id').valueAsNumber, this.querySelector('#supplier-name').value,
            $("#supplier-zipcode")[0].valueAsNumber,$("#supplier-fname")[0].value,$("#supplier-lname")[0].value,$("#supplier-email")[0].value,$("#supplier-lastdeliverydate")[0].valueAsDate,
            $("#supplier-isactive")[0].checked);
        suppliers.push(newsupplier);
        $(".suppliers-list").append(newsupplier.createElement())
        this.reset()
    });
    document.getElementById('customer-form').addEventListener('submit', function(e){
        event.preventDefault();
        const newcustomer = new Customer(this.querySelector('#customer-id').value, this.querySelector('#customer-fname').value,
            $("#customer-lname")[0].value,$("#customer-email")[0].value,$("#customer-phonenumber")[0].value,$("#customer-mailinglistopt")[0].checked, $("#customer-lastpurchase")[0].valueAsDate);
        customers.push(newcustomer);
        $(".customers-list").append(newcustomer.createElement())
        this.reset()
    });



})