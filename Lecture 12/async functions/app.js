function asyncFunction1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunction2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data2");
            resolve("success");
        }, 4000);
    });
}

function asyncFunction3(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data3");
            resolve("success");
        }, 4000);
    });
}

let p1 = asyncFunction1();
console.log("fetching data1...")

//promise chaining
p1.then((res)=>{
    console.log(res);
    let p2 = asyncFunction2();
console.log("fetching data2...")

p2.then((res)=>{
    console.log(res);
    let p3 = asyncFunction3();
console.log("fetching data3...")

p3.then((res)=>{
    console.log(res);
})
})
})



