let solu = document.querySelector("#solucion")
function ejercicio1() {
    let num1 = prompt("Introduce el primer numero")
    let num2 = prompt("Introduce el segundo numero")
    let division = num1 / num2
    let resto = num1 % num2

    if (num2 != 0) {
        if (resto==0) {
            solu.textContent = "Division entre "+num1+" y "+num2+" da "+division+" y SI ES EXACTA"
        }
        else {
            solu.textContent = "Division entre "+num1+" y "+num2+" da "+division+" y NO ES EXACTA"
        }
    }
    else {
        solu.textContent = "No se pued dividir entre 0"
    }
}

function ejercicio2() {
    let num1 = prompt("Introduce el primer numero")
    let num2 = prompt("Introduce el segundo numero")
    if (num1 == num2)
        solu.textContent = ""+num1+" y "+num2+" son iguales"
    else {
        if (num1 < num2)
            solu.textContent = ""+num1+" y "+num2+", "+num2+" es mayor"
        else {
            solu.textContent = ""+num1+" y "+num2+", "+num1+" es mayor"
        }
    }
}

function ejercicio3() {
    let ano1 = parseInt(prompt("Introduce el primer numero"))
    let ano2 = parseInt(prompt("Introduce el segundo numero"))
    if (ano1 > ano2) {
        let resta = ano1 - ano2
        solu.textContent = "Han pasado "+resta+" desde "+ano2+""
    }
    else {
        let resta = ano2 - ano1
        solu.textContent = "Han pasado "+resta+" desde "+ano1+""
    }
}

function ejercicio4() {
    let num1 = parseInt(prompt("Introduce el primer número entero:"))
    let num2 = parseInt(prompt("Introduce el segundo número entero:"))

    if (num1 <= 0 || num2 <= 0) {
        solu.textContent = "Aviso: Has introducido valores negativos o nulos."
    } else {
        let mayor = Math.max(num1, num2)
        let menor = Math.min(num1, num2)

        if (mayor % menor === 0) {
            solu.textContent = "El mayor (" + mayor + ") es múltiplo del menor (" + menor + ")."
        } else {
            solu.textContent = "El mayor (" + mayor + ") NO es múltiplo del menor (" + menor + ")."
        }
    }
}

function ejercicio5() {
    let num1 = parseFloat(prompt("Introduce el primer número:"))
    let num2 = parseFloat(prompt("Introduce el segundo número:"))
    let num3 = parseFloat(prompt("Introduce el tercer número:"))

    if (num1 === num2 && num2 === num3) {
        solu.textContent = "Los tres números son iguales."
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
        solu.textContent = "Hay dos números iguales y uno distinto."
    } else {
        solu.textContent = "Los tres números son distintos."
    }
}

function ejercicio6() {
    let anio = parseInt(prompt("Introduce un año:"))

    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        solu.textContent = "El año " + anio + " es bisiesto."
    } else {
        solu.textContent = "El año " + anio + " no es bisiesto."
    }
}

function ejercicio7() {
    let a = parseFloat(prompt("Introduce el coeficiente a:"))
    let b = parseFloat(prompt("Introduce el coeficiente b:"))

    if (a === 0 && b === 0) {
        solu.textContent = "Todos los números son solución."
    } else if (a === 0 && b !== 0) {
        solu.textContent = "La ecuación no tiene solución."
    } else {
        let x = -b / a
        solu.textContent = "La solución única es x = " + x
    }
}

function ejercicio8() {
    let dia = parseInt(prompt("Introduce el día:"))
    let mes = parseInt(prompt("Introduce el mes:"))
    let anio = parseInt(prompt("Introduce el año:"))

    let bisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)
    let diasMes = [0, 31, bisiesto ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (mes >= 1 && mes <= 12 && dia >= 1 && dia <= diasMes[mes]) {
        solu.textContent = "La fecha existe."
    } else {
        solu.textContent = "La fecha no existe."
    }
}

function ejercicio9() {
    let nota1 = parseFloat(prompt("Introduce la primera nota:"))
    let nota2 = parseFloat(prompt("Introduce la segunda nota:"))
    let nota3 = parseFloat(prompt("Introduce la tercera nota:"))

    let suma = nota1 + nota2 + nota3
    let promedio = suma / 3

    if (promedio >= 7) {
        solu.textContent = "Promocionado"
    } else {
        solu.textContent = "Promedio: " + promedio + ". No alcanza para promocionar."
    }
}

function ejercicio10() {
    let clave1 = prompt("Ingrese la clave:")
    let clave2 = prompt("Ingrese la clave nuevamente:")

    if (clave1 == clave2) {
        solu.textContent = "Las claves son iguales."
    } else {
        solu.textContent = "Las claves son distintas."
    }
}