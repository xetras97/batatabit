// Variables para scroll de planes
var contenedorPlanes = document.getElementById("plans-container__slider");
var flechaDerechaPlanes = document.getElementById("arrow-right");
var flechaIzquierdaPlanes = document.getElementById("arrow-left");

// Variables para scroll tablas
var contenedorTablas = document.getElementById("exchange-container__tables");
var flechaDerechaTablas = document.getElementById("arrow-right-tables");
var flechaIzquierdaTablas = document.getElementById("arrow-left-tables");

// Listener tablas
flechaDerechaTablas.addEventListener("click", scrollDerecha);
flechaIzquierdaTablas.addEventListener("click", scrollIzquierda);

// Listener planes
flechaDerechaPlanes.addEventListener("click", desplazarDerecha);
flechaIzquierdaPlanes.addEventListener("click", desplazarIzquierda);

// Funciones scroll tablas
function scrollDerecha() {
    contenedorTablas.scrollLeft += 200;
}

function scrollIzquierda() {
    contenedorTablas.scrollLeft -= 200;
}

// Posicionar plan recomendado en el medio por defecto
contenedorPlanes.scrollLeft = 155;

// Funciones scroll planes
function desplazarDerecha() {
    contenedorPlanes.scrollLeft += 100;
}

function desplazarIzquierda() {
    contenedorPlanes.scrollLeft -= 100;
}