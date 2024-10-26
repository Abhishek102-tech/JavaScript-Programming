let k=document.querySelector(".mode");
let l=document.querySelector(".para1");
let m=document.querySelector(".para2");
let n=document.querySelector("body");
let mode="bright";
k.addEventListener("click",()=>{
    if(mode=="bright"){
    n.style.width="100vw";
    n.style.height="100vh";
    n.style.background="linear-gradient(to bottom, grey, black)";
    n.style.backgroundRepeat="no-repeat";
    l.style.color="aliceblue";
    m.style.color="aliceblue";
    k.style.background="linear-gradient(to bottom, grey, white)";
    k.style.color="black";
    m.innerText="Click on the button below to change to bright mode";
    k.innerText="Change to bright mode";
    mode="dark";
    }
    else{
    n.style.width="100vw";
    n.style.height="100vh";
    n.style.background="white";
    n.style.backgroundRepeat="no-repeat";
    l.style.color="black";
    m.style.color="black";
    k.style.background="linear-gradient(to bottom, grey, black)";
    k.style.color="aliceblue";
    m.innerText="Click on the button below to change to dark mode";
    k.innerText="Change to dark mode";
    mode="bright";
    }
})
