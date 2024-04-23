
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let galeria_port = document.getElementById("galeria-port");

let contador = 0;

boton.addEventListener("click", function(){
    if(contador==0){
        enlaces.className=("enlaces dos")
        contador=1;
        galeria_port.style.display = "none";
    }else{
        enlaces.classList.remove("dos")
        enlaces.className= ("enlaces uno")
        contador=0;
        galeria_port.style.display = "flex";
    }
})
