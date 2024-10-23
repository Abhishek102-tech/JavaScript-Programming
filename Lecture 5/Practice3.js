let marks=[67,87,90,65,96,92,45,98];
console.log(marks);
let newMarks = marks.filter((val)=>{
    return val > 90;
})
console.log(newMarks);