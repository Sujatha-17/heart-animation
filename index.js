
const body = document.querySelector("body");
body.addEventListener("mousemove",(event)=>{
    let xPos = event.offsetX;
    let yPos = event.offsetY;
    
    let spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const randomSize = Math.random()*100;
    spanEl.style.width= randomSize + "px";
    spanEl.style.height = randomSize + "px";
    
    body.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
      }, 3000);;
})