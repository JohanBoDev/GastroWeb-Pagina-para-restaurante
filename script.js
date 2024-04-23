<<<<<<< HEAD
let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(){
    if(contador==0){
        enlaces.className=("enlaces dos")
        contador=1;
    }else{
        enlaces.classList.remove("dos")
        enlaces.className= ("enlaces uno")
        contador=0;
    }
})
=======
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


>>>>>>> f5b0675 (Actualizacion del menu, nuestras recetas y comidas)
