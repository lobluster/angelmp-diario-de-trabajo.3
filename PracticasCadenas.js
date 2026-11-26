let solu = document.querySelector("#solucion")

function ejercicio1() {
    let salida = ""
    let cadena = prompt("Introduzca una cadena")
    salida= "La cadena introducida es ["+cadena+"]"
    salida += "El número de caracteres es: "+cadena.length+"<br>"
    salida += "La primera letra de la cadena es "+cadena.charAt(0)+"<br>"
    salida += "Los tres primeros caracteres de la cadena "+cadena.subtring(0,3)+"<br>"
    if (cadena.indexOf("hola")) {
        salida += "la cadena SI contiene hola<br>"
    }
    else {
        salida += "La cadena No contiene hola<br>"
    } 
    salida += "La cadena convertida a mayuscula es "+cadena.toUpperCase()+"<br>"
    salida += "La cadena convertida a minuscula es "+cadena.toLocaleLowerCase()+"<br>"
    solu.textContent = salida
}

function ejercicio2() {
    let salida = ""
    let cuenta = 0
    let palabra = prompt("Introduzca una cadena")
    while(palabra.toLowerCase() != "fin") {
        cuenta++
        palabra = prompt("Introduzca una palabra. FIN para terminar")
    }
    salida += "El numero de palabras introducido es "+cuenta
    solu.textContent = salida
}

function ejercicio3() {
    let salida = ""
    let frase = prompt("Introduzca una frase que contenga la A")
    while(frase.indexOf("A") == -1) {
        frase = prompt("La frase debe contener una A. Vuelva a escribir una")
    }
    solu.textContent = "La frase introducida ["+frase+"] contiene la A"
}

function ejercicio4() {
    let salida = ""
    solu.textContent = salida
}

function ejercicio5() {
    let salida = ""
    solu.textContent = salida
}

function ejercicio6() {
    let salida = ""
    solu.textContent = salida
}

function ejercicio7() {
    let salida = ""
    solu.textContent = salida
}

function ejercicio8() {
    let salida = ""
    solu.textContent = salida
}