let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
deleteditem1=companies.shift();
console.log("deleted items = ",deleteditem1);
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);