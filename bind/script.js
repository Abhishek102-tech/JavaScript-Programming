var student = {
    name: "Aman",
    age: 20,
    branch: "CSE",
    displayDetails: function() {
        console.log("Name: " + this.name + ", Age: " + this.age + ", Branch: " + this.branch);
    }
};


var display = student.displayDetails.bind(student);


display();
console.log(typeof display);
console.log(student.hasOwnProperty("display"));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log("Name: " + this.name + ", Age: " + this.age);
    }
}

var getage = function() {
    console.log("Age is: " + this.age);
}

getage1 = getage.bind(new Person("Aman", 20));
getage1();
console.log(Person.hasOwnProperty("getage"));

let p2 = new Person("Rahul", 22);
getage2 = getage.bind(p2);
getage2();