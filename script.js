const abrirMenu = document.querySelector(".menu-mobile");
const mostrarMenu = document.querySelector(".menu-js");
const cerrarMenu = document.querySelector(".cerrar-menu");


abrirMenu.addEventListener("click",abrirMenuMobile);

function abrirMenuMobile () {

    mostrarMenu.classList.remove("disabled");

}
cerrarMenu.addEventListener("click",()=>{
    mostrarMenu.classList.add("disabled"); //que al hacer click en la cruz le vuelva a agregar la clase disabled asi desaparece
})

