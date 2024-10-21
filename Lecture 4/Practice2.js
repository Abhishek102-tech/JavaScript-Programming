let price=[250,645,300,900,50];
let dis=0;
let n=0;
for(i of price){
    dis=(10/100)*i;
    i=i-dis;
    price[n]=i;
    n++
};
console.log(price);