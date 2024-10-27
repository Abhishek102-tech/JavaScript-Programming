let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let btn3=document.querySelector(".btn3");
let btn4=document.querySelector(".btn4");
let btn5=document.querySelector(".btn5");
let btn6=document.querySelector(".btn6");
let btn7=document.querySelector(".btn7");
let btn8=document.querySelector(".btn8");
let btn9=document.querySelector(".btn9");
let para=document.querySelector(".para");
let play=document.querySelector(".play");
let container=document.querySelector(".container");
let name1=prompt("Player X's Name");
let name2=prompt("Player O's Name");
let el1=document.createElement("img");
el1.src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-807.gif";
el1.classList.add("el1")
let el2=document.createElement("img");
el2.src="https://www.icegif.com/wp-content/uploads/2023/04/icegif-807.gif";
el2.classList.add("el2")
para.innerText=name1+"'s Turn"
let i=1;
        btn1.addEventListener("click",()=>{
            if(i%2!=0){
            btn1.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn1.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins";
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins";
                container.before(el1);
                container.before(el2);
            }
        })
        btn2.addEventListener("click",()=>{
            if(i%2!=0){
            btn2.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn2.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
        btn3.addEventListener("click",()=>{
            if(i%2!=0){
            btn3.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn3.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
        btn4.addEventListener("click",()=>{
            if(i%2!=0){
            btn4.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn4.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
        btn5.addEventListener("click",()=>{
            if(i%2!=0){
            btn5.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn5.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins";
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins";
                container.before(el1);
                container.before(el2);
            }
        })
        btn6.addEventListener("click",()=>{
            if(i%2!=0){
            btn6.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn6.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
        btn7.addEventListener("click",()=>{
            if(i%2!=0){
            btn7.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn7.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
        btn8.addEventListener("click",()=>{
            if(i%2!=0){
            btn8.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn8.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
        btn9.addEventListener("click",()=>{
            if(i%2!=0){
            btn9.innerText="X";
            para.innerText=name2+"'s Turn";
            }
            else{
                btn9.innerText="O";
                para.innerText=name1+"'s Turn";
            }
            i++;
            if(btn1.innerText=="X" && btn4.innerText=="X" && btn7.innerText=="X"||btn2.innerText=="X"&&btn5.innerText=="X"&&btn8.innerText=="X"||btn3.innerText=="X"&&btn6.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn2.innerText=="X"&&btn3.innerText=="X"||btn4.innerText=="X"&&btn5.innerText=="X"&&btn6.innerText=="X"||btn7.innerText=="X"&&btn8.innerText=="X"&&btn9.innerText=="X"||btn1.innerText=="X"&&btn5.innerText=="X"&&btn9.innerText=="X"||btn3.innerText=="X"&&btn5.innerText=="X"&&btn7.innerText=="X"){
                para.innerText=name1+" Wins"
                container.before(el1);
                container.before(el2);
            }
            if(btn1.innerText=="O" && btn4.innerText=="0" && btn7.innerText=="O"||btn2.innerText=="O"&&btn5.innerText=="O"&&btn8.innerText=="O"||btn3.innerText=="O"&&btn6.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn2.innerText=="O"&&btn3.innerText=="O"||btn4.innerText=="O"&&btn5.innerText=="O"&&btn6.innerText=="O"||btn7.innerText=="O"&&btn8.innerText=="O"&&btn9.innerText=="O"||btn1.innerText=="O"&&btn5.innerText=="O"&&btn9.innerText=="O"||btn3.innerText=="O"&&btn5.innerText=="O"&&btn7.innerText=="O"){
                para.innerText=name2+" Wins"
                container.before(el1);
                container.before(el2);
            }
        })
play.addEventListener("click",()=>{
    btn1.innerText=" ";
    btn2.innerText=" ";
    btn3.innerText=" ";
    btn4.innerText=" ";
    btn5.innerText=" ";
    btn6.innerText=" ";
    btn7.innerText=" ";
    btn8.innerText=" ";
    btn9.innerText=" ";
    para.innerText="Player X's Turn";
    i=1;
    el1.remove();
    el2.remove();
    para.innerText=name1+"'s Turn";
})