const solu = document.querySelector("#solucion")

function ejercicio1() {
    let menu = prompt("c,p,v")
    switch (menu) {
        case "C" :
            solu.textContent = "tinto"
            break;
        case "P" :
            solu.textContent = "blanco"
            break;
        case "V" :
            solu.textContent = "agua"
            break;
        default:
            solu.textContent = "menu"    
    }
}

function ejercicio2() {
    let mes = parseInt(prompt("Introduce el número del mes:"))

    if (mes === 12 || mes === 1 || mes === 2) {
        solu.textContent = "Invierno"
    } else if (mes >= 3 && mes <= 5) {
        solu.textContent = "Primavera"
    } else if (mes >= 6 && mes <= 8) {
        solu.textContent = "Verano"
    } else if (mes >= 9 && mes <= 11) {
        solu.textContent = "Otoño"
    } else {
        solu.textContent = "Mes no válido"
    }
}

function ejercicio3() {
    let tipo = prompt("Introduce el tipo de coche (gasolina, diesel, eléctrico o 1, 2, 3):").toLowerCase()

    if (tipo === "gasolina" || tipo === "1") {
        solu.textContent = "Se le enviará a la oficina número 100."
    } else if (tipo === "diesel" || tipo === "2") {
        solu.textContent = "Se le enviará a la oficina número 200."
    } else if (tipo === "eléctrico" || tipo === "3") {
        solu.textContent = "Se le enviará a la oficina número 300."
    } else {
        solu.textContent = "Tipo de coche no reconocido."
    }
}

function ejercicio4() {
    let compra = parseFloat(prompt("Introduce el valor total de la compra:"))
    let descuento = 0

    if (compra > 400) {
        descuento = 0.15
    } else if (compra > 300) {
        descuento = 0.10
    } else if (compra >= 100) {
        descuento = 0.05
    }

    let totalPagar = compra - (compra * descuento)
    solu.textContent = "La cantidad a pagar es: " + totalPagar
}

function ejercicio5() {
    let nota = parseInt(prompt("Introduce la nota numérica:"))

    if (nota >= 0 && nota <= 4) {
        solu.textContent = "Suspenso"
    } else if (nota === 5 || nota === 6) {
        solu.textContent = "Aprobado"
    } else if (nota === 7 || nota === 8) {
        solu.textContent = "Notable"
    } else if (nota === 9 || nota === 10) {
        solu.textContent = "Sobresaliente"
    } else {
        solu.textContent = "Nota no válida"
    }
}