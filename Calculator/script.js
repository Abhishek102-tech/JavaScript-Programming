let screen=document.querySelector('.screen');
let buttons=document.querySelectorAll('.btn');

buttons.addEventListener('click', (e) => {
    screen.value += e.target.innerText;
})