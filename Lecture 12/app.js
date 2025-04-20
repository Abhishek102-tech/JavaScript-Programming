function hello(){
    console.log('Hello!!');
}

setTimeout(hello, 2000); //timeout in milliseconds 2s=2000ms
//setTimeout is an asdynchronous function, it will not block the code below it from executing
//setTimeout is a built in function that takes two arguments, a function and a time in milliseconds
console.log('one');
console.log("two");

setTimeout(()=>{ //This is known as an arrow function
    console.log('Hello!!');
},5000)

console.log("three");
console.log("four");