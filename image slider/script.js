let track=document.querySelector(".track");

window.onmousedown=e=>{
    track.dataset.mouseDownAt= e.clientX;
}

window.onmousemove=e=>{
    const mousedelta=parseFloat(track.dataset.mouseDownAt)-e.clientX;
    const maxDelta=window.innerWidth/2;

    const percentage=(mousedelta/maxDelta)*100;
}