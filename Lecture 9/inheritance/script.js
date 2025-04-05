class Person{
    constructor(){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("Eating...");
    }
    sleep(){
        console.log("Sleeping...");
    }
}

class Engineer extends Person{
    constructor(branch){
        super();
        this.branch = branch;
    }
    code(){
        console.log("Coding...");
    }
}
class Doctor extends Person{
    treat(){
        console.log("Treating...");
    }
}

let Abhishek = new Engineer("Computer Science");