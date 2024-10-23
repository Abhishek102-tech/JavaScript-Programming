let n=prompt("Enter any number");

var a=[];

for(i=1;i<=n;i++){
    a[i-1]=i;
}

console.log(a);

let sum=a.reduce((res,val)=>{
    return res+val;
})

console.log("Sum = ",sum);

let product=a.reduce((res,val)=>{
    return res*val;
})

console.log("Product = ",product);