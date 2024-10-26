let btn1=document.querySelector(".Button1");
// btn1.onclick=(e)=>{
//     console.log("Button was clicked");
//     alert("Hello!");
// }
let box1=document.querySelector(".box");
box1.onmouseover=()=>{
    console.log("You are inside a div");
}
btn1.addEventListener("click",()=>{
    console.log("Button was clicked");
    alert("Hello");
})