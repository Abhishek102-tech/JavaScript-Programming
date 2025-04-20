const getPromise = ()=>{
    return new Promise((resolve, reject)=>{
        console.log("I am a promise");
        // resolve("success");
        reject("error");
    })
}

let promise = getPromise();
promise.then(()=>{
    console.log("Promise fulfilled");
})

promise.catch(()=>{
    console.log("An error occurred");
})

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("get data by id:",dataId);
//             resolve("success");
//             reject("error");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     })
// }

