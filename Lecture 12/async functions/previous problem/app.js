function getData(dataId){
    console.log("getting data for id: " + dataId);
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("data :" + dataId);
        resolve("success");
    },2000);
})
}

getData(1).then((res)=>{
    getData(2).then((res)=>{
        getData(3).then((res)=>{
            console.log(res);
        })
    })
})

