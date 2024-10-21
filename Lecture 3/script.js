let student={
    Name : "Abhishek",
    Age : 19,
    Stream : "CSE",
    Year : "1st Year"
};
size=0;
for(let a in student){
    console.log(" key = ",a,"value = ",student[a]);
    size++;
}
console.log("Size = ",size);