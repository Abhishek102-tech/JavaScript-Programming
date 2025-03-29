let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(b => {
    b.addEventListener('click', (e) => {
        console.log(e)
        if(e.target.id=="negative"){
            screen.innerText = -1 * parseFloat(screen.innerText);
            return;
        }
        if(e.target.id=="clear"){
            screen.innerText = screen.innerText.slice(0,screen.innerText.length-1);
            if(screen.innerText.length==0 || screen.innerText=="-"){
                screen.innerText = 0;
            }
            return;
        }
        if(e.target.id=="restart"){
            screen.innerText = 0;
            return;
        }
        if(e.target.id=="equal"){
            let k=screen.innerText.replaceAll("X","*");
            screen.innerText = eval(k);
            return;
        }
        if(screen.innerText=="0"){
            screen.innerText = e.target.innerText;
            return;
        }
        
        screen.innerText += e.target.innerText;
    }
    )})