let onda1 = document.getElementById("onda1")
let onda2 = document.getElementById("onda2")
let onda3 = document.getElementById("onda3")
let onda4 = document.getElementById("onda4")
let botao1 = document.querySelector(".botao-proxima-cor")
let botao2 = document.querySelector(".botao-cor-anterior")



window.addEventListener('scroll', function(){
    let rolagemPos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagemPos * 4 + "px";
    onda2.style.backgroundPositionX = 300 + rolagemPos * -4 + "px";
    onda3.style.backgroundPositionX = 200 + rolagemPos * 2 + "px";
    onda4.style.backgroundPositionX = 100 + rolagemPos * -2 + "px";

    if(rolagemPos > 600){
        botao1.style.right = "50px";
        botao1.style.transition = "1s";
        botao2.style.left = "50px";
        botao2.style.transition = "1s";
    }
    else{
        botao1.style.right = "-220px";
        botao2.style.left = "-220px";
    }

})
