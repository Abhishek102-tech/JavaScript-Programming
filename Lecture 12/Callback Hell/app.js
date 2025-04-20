function fetchData(dataId, fetchNextData){
    console.log("Fetching data for ID:", dataId);
    setTimeout(() => {
        console.log("Data fetched for ID:", dataId);
        if(fetchNextData){
            fetchNextData();
        }
        
    },2000);
}


//Callback Hell is a nested structure of callbacks that makes the code hard to read and maintain.
// It is also known as "Pyramid of Doom" because of its shape.
fetchData(1, () => {
    fetchData(2,()=>{
        fetchData(3,()=>{
            fetchData(4);
        })
    })
});