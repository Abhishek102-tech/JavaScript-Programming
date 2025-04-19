a=17;
b=11;
console.log("a = ",a)
console.log("b = ",b)
console.log("a + b = ",a+b)
console.log("a - b = ",a-b)
console.log("a * b = ",a*b)
console.log("a / b = ",a/b)

try{
    console.log("a+b=",a+c)
}catch(err){ //err is the error object and err.message is the error message
    console.log("Error: ",err.message)
}