class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
}
class Admin extends user{
    constructor(name, email){
        super(name, email);
    }

    editData(student, name, email){
        student.name = name;
        student.email = email;
        console.log(`Student data updated: Name: ${student.name}, Email: ${student.email}`);
    }
}

let student1 = new user("Abhishek","abc@gmail.com");
let student2 = new user("Avinash", "avk@gmail.com");
let teacher = new Admin("Divyansh","dk@gmail.com")