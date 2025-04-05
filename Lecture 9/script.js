class Toyota{
    constructor(){
        console.log("Toyota Car is being created...");
    }
    start(){
        console.log("Toyota is starting...");
    }

    stop(){
        console.log("Toyota is stopping...");
    }

    setBrand(brand){
        this.brand = brand;
    }
} 

let innova = new Toyota();
innova.setBrand("Innova");
let fortuner = new Toyota();
