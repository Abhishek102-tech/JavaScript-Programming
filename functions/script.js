let a =["hello","how","are","you"];
document.getElementById("arr").innerHTML = a;
let pushbtn = document.getElementById("addElement");
pushbtn.addEventListener("click",function(){
    let newElement = document.getElementById("newElement").value;
    a.push(newElement);
    document.getElementById("arr").innerHTML = a;
});
let removebtn = document.getElementById("removeElement");
removebtn.addEventListener("click",function(){
    a.pop();
    document.getElementById("arr").innerHTML = a;
});