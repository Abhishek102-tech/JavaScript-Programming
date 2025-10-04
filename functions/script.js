let a =["hello","how","are","you","?"];
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

let upperbtn = document.getElementById("upperCase");
upperbtn.addEventListener("click",function(){
    let upperCase = a.map(words=>words.toUpperCase());
    document.getElementById("arr").innerHTML = upperCase;
});
let lowerbtn = document.getElementById("lowerCase");
lowerbtn.addEventListener("click",function(){
    let lowerCase = a.map(words=>words.toLowerCase());
    document.getElementById("arr").innerHTML = lowerCase;
});

let filterbtn = document.getElementById("filter");
filterbtn.addEventListener("click",function(){
    let filter = a.filter(words=>words.length>3);
    document.getElementById("arr").innerHTML = filter;
});

let revertbtn = document.getElementById("revert");
revertbtn.addEventListener("click",function(){
    document.getElementById("arr").innerHTML = a;
});

const sentenceMaker = (words,space) => words + space;

let SentenceBtn = document.getElementById("getSentence");
SentenceBtn.addEventListener("click",()=>{
    sentence = a.reduce(sentenceMaker," ");
    sen = a.join(" ")
    document.getElementById("SentenceBox").innerHTML = sen; 
})

