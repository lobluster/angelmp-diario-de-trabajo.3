let solu = document.querySelector("#solucion")

function ejercicio1() {
    let respuesta = "";

    do {
        respuesta = prompt("¿Desea terminar el programa? (S/s)");
    } while (respuesta !== "S" && respuesta !== "s");
}

function ejercicio2() {
    let intentos = 0;
    let coinciden = false;
    const maxIntentos = 3;

    while (intentos < maxIntentos && !coinciden) {
        let pass1 = prompt("Introduce la contraseña:");
        let pass2 = prompt("Confirma la contraseña:");
        
        if (pass1 === pass2) {
            coinciden = true;
            alert("¡Contraseñas correctas y coincidentes!");
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert(`Las contraseñas no coinciden. Te quedan ${maxIntentos - intentos} intentos.`);
            } else {
                alert("Has superado el límite de 3 intentos. Acceso denegado.");
            }
        }
    }
}

function ejercicio3() {

    let objetivo = parseFloat(prompt("¿Cuál es la cantidad de dinero que quieres ahorrar?"));

    let totalAhorrado = 0;


    while (totalAhorrado < objetivo) {
        let cantidadTexto = prompt(`Objetivo: ${objetivo} €\nLlevas ahorrado: ${totalAhorrado} €\nIntroduce la cantidad que deseas añadir:`);
        

        let cantidad = parseFloat(cantidadTexto);
        

        if (!isNaN(cantidad) && cantidad > 0) {
            totalAhorrado += cantidad;
        } else {
            alert("Por favor, introduce una cantidad válida.");
        }
    }


    alert(`¡Felicidades! Has alcanzado tu objetivo de ahorro.\nTotal ahorrado: ${totalAhorrado} €`);
}

function ejercicio4() {

    let Num1 = parseFloat(prompt("Introduce primer numero"));

    let Num2 = prompt("Introduce segundo numero");

    while (Num2 < Num1) {
        let correccion = prompt(`otro numero bro`);
        let Num3 = parseFloat(correccion);

        if (!isNaN(Num3) && Num3 > Num2) {
            alert(`bro es mayor que el primero`);
        }
    }
    alert(`bro es mayor que el primero`);
}

function ejercicio5() {

    let anterior = parseInt(prompt("Introduce un número entero:"));


    if (isNaN(anterior)) {
        alert("Por favor, recarga la página e introduce un número válido.");
    } else {
        let numero;
        let continuar = true;


        while (continuar) {
            numero = parseInt(prompt(`Introduce un número mayor que ${anterior}:`));

            if (isNaN(numero)) {
                alert("Eso no es un número válido. Fin del programa.");
                break;
            }


            if (numero > anterior) {
                anterior = numero;
            } else {
                alert(`¡El número ${numero} no es mayor que ${anterior}! Fin del programa.`);
                continuar = false;
            }
        }
    }
}

function ejercicio6() {
    let cantidad = parseInt(prompt("¿Cuántos números se tienen que escribir?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Por favor, introduce un número válido mayor a 0.");
    } else {
        let numeros = [];

        for (let i = 0; i < cantidad; i++) {
            let numero = parseFloat(prompt(`Introduce el número ${i + 1} de ${cantidad}:`));
            numeros.push(numero);
        }

        console.log("Números introducidos:", numeros);
        alert("¡Listo! Los números que escribiste son:\n" + numeros.join(", "));
    }
}

function ejercicio7() {
    let suma = 0;
    let num = parseFloat(prompt("Introduce un número (negativo para terminar):"));

    while (num >= 0 && !isNaN(num)) {
        suma += num;
        num = parseFloat(prompt("Introduce un número (negativo para terminar):"));
    }

    alert("La suma de los números introducidos es: " + suma);
}

function ejercicio8() {
    let continuar;
    let pares = [];

    do {
        let num = parseInt(prompt("Introduce un número par:"));
        
        if (num % 2 === 0) {
            pares.push(num);
        } else {
            alert("Ese no es un número par.");
        }
        
        continuar = prompt("¿Desea seguir introduciendo números? (S/s)");
    } while (continuar === "S" || continuar === "s");

    console.log("Números pares introducidos:", pares);
    }

function ejercicio9() {
    let intentos = 0;
    let coinciden = false;
    const maxIntentos = 3;

    while (intentos < maxIntentos && !coinciden) {
        let pass1 = prompt("Introduce la contraseña:");
        let pass2 = prompt("Confirma la contraseña:");
        
        if (pass1 === pass2) {
            coinciden = true;
            alert("¡Contraseñas correctas y coincidentes!");
        } else {
            intentos++;
            if (intentos < maxIntentos) {
                alert(`Las contraseñas no coinciden. Te quedan ${maxIntentos - intentos} intentos.`);
            } else {
                alert("Has superado el límite de 3 intentos. Acceso denegado.");
            }
        }
    }
}

function ejercicio10() {
    let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 1000):"));
    let intentos = 1;

    while (numeroUsuario !== numeroAleatorio) {
        if (isNaN(numeroUsuario)) {
            numeroUsuario = parseInt(prompt("Por favor, introduce un número válido:"));
        } else if (numeroUsuario < numeroAleatorio) {
            numeroUsuario = parseInt(prompt("El número es mayor. Intenta de nuevo:"));
            intentos++;
        } else {
            numeroUsuario = parseInt(prompt("El número es menor. Intenta de nuevo:"));
            intentos++;
        }
    }

    alert(`¡Felicidades! Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`);
}