var circles = document.getElementsByTagName('span');
var vel = document.getElementById('velocidade');

function ligar() {
    for (let i = 0; i < circles.length; i++) {    
        circles[i].removeAttribute("style");
        circles[i].style.WebkitAnimationPlayState = "running";
    }
}

function desligar() {
    for (let i = 0; i < circles.length; i++) {    
        circles[i].style.animation = "none";   
        circles[i].style.backgroundColor = "grey";   
    }
}

vel.addEventListener('mouseup', alterar);
function alterar(){
    for (let i = 0; i < circles.length; i++) {
        var aux = vel.value / 3;
        circles[i].style.animationDuration = aux + "s";
    }
}