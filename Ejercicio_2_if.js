let solu = document.querySelector("#solucion")

function ejercicio1() {
    let terminar;
    do {
        terminar = prompt("¿Desea terminar?")
    } while (terminar != `s` && terminar != `s`)
    solu.textContent = "He terminado porque has escrito "+ terminar;
}

function ejercicio1() {
    solu.textContent = "He terminado porque has escrito "+ terminar;
}

function ejercicio1c() {
    let terminar;
    do {
        terminar = prompt("¿Desea terminar?")
    } while (terminar.toLowerCase != `s` && terminar != `s`)
    solu.textContent = "He terminado porque has escrito "+ terminar;
}

function ejercicio2() {
    let contra1 = prompt("Introduzca la contraseña")
    let contra2 = prompt("Introduzca la contraseña")
    while (contra1 != contra2) {
        contra1 = prompt("a")
        contra2 = prompt("b")
    }
    solu.textContent = "las contraseñas coinciden"+ terminar;
}