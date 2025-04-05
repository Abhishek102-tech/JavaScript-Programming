const employee ={
    clacTax() {
        console.log("Tax rate is 10%")
    }
};

const Abhishek = {
    salary: 50000,
    clacTax() {
        console.log("Your tax is 20%")
    }
};

Abhishek.__proto__ = employee; // Setting the prototype of Abhishek to employee
