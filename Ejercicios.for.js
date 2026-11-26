let solu = document.querySelector("#solucion")
function ejercicio1() {
    let inicio = parseInt(prompt("Introduce el primer número entero:"));
    let fin = parseInt(prompt("Introduce el segundo número entero:"));
    let resultado = "";

    // Determinamos cuál es el menor y cuál el mayor por si acaso
    let menor = Math.min(inicio, fin);
    let mayor = Math.max(inicio, fin);

    for (let i = menor; i <= mayor; i++) {
        if (i % 2 === 0) {
            resultado += `El número ${i} es par<br>`;
        } else {
            resultado += `El número ${i} es impar<br>`;
        }
    }

    solu.innerHTML = resultado;
}

function ejercicio2() {
    let numero = parseInt(prompt("Introduce un número entero mayor que cero:"));
    let resultado = "";

    if (numero > 0) {
        resultado += `Los divisores de ${numero} son: <br>`;
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                resultado += `${i} `;
            }
        }
    } else {
        resultado = "Por favor, introduce un número válido mayor que cero.";
    }

    solu.innerHTML = resultado;
}

function ejercicio3() {
    let cantidad = parseInt(prompt("¿Cuántos números vas a introducir?"));
    let resultado = "";

    if (cantidad > 0) {
        let primero = parseInt(prompt("Introduce el número 1 (base):"));
        resultado += `Número base inicial: ${primero}<br><br>`;

        for (let i = 2; i <= cantidad; i++) {
            let actual = parseInt(prompt(`Introduce el número ${i}:`));
            
            if (actual <= primero) {
                resultado += `El número ${actual} no es mayor que el primero (${primero})<br>`;
            } else {
                resultado += `El número ${actual} es mayor que el primero (${primero})<br>`;
            }
        }
    } else {
        resultado = "Introduce una cantidad válida mayor que cero.";
    }

    solu.innerHTML = resultado;
}

function ejercicio4() {
    let cantidad = parseInt(prompt("¿Cuántos números se van a introducir?"));
    let resultado = "";

    if (cantidad > 0) {
        let anterior = parseInt(prompt("Introduce el número 1:"));
        resultado += `Número 1: ${anterior}<br>`;

        for (let i = 2; i <= cantidad; i++) {
            let actual = parseInt(prompt(`Introduce el número ${i}:`));
            
            if (actual <= anterior) {
                resultado += `El número ${actual} no es mayor que el anterior (${anterior})<br>`;
            } else {
                resultado += `El número ${actual} es mayor que el anterior (${anterior})<br>`;
            }
            anterior = actual;
        }
    } else {
        resultado = "Introduce una cantidad válida mayor que cero.";
    }

    solu.innerHTML = resultado;
}

function ejercicio5() {
    let cantidad = parseInt(prompt("¿Cuántos números se van a introducir?"));
    let negativos = 0;
    let resultado = "";

    if (cantidad > 0) {
        for (let i = 1; i <= cantidad; i++) {
            let numero = parseInt(prompt(`Introduce el número ${i}:`));
            if (numero < 0) {
                negativos++;
            }
        }
        resultado = `Has introducido un total de ${negativos} números negativos.`;
    } else {
        resultado = "Introduce una cantidad válida mayor que cero.";
    }

    solu.innerHTML = resultado;
}

function ejercicio6() {
    let cantidad = parseInt(prompt("¿Cuántos números se van a introducir?"));
    let pares = 0;
    let impares = 0;
    let resultado = "";

    if (cantidad > 0) {
        for (let i = 1; i <= cantidad; i++) {
            let numero = parseInt(prompt(`Introduce el número ${i}:`));
            if (numero % 2 === 0) {
                pares++;
            } else {
                impares++;
            }
        }
        resultado = `De los ${cantidad} números introducidos:<br>
                        Pares: ${pares}<br>
                        Impares: ${impares}`;
    } else {
        resultado = "Introduce una cantidad válida mayor que cero.";
    }

    solu.innerHTML = resultado;
}

function ejercicio7() {
    let numero = parseInt(prompt("Introduce un número entero mayor que 1:"));
    let resultado = "";

    if (numero > 1) {
        let esPrimo = true;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
        
        if (esPrimo) {
            resultado = `El número ${numero} es un número primo`;
        } else {
            resultado = `El número ${numero} no es un número primo`;
        }
    } else {
        resultado = "Por favor, introduce un número entero estrictamente mayor que 1.";
    }

    solu.innerHTML = resultado;
}

function ejercicio8() {
    let cantidad = parseInt(prompt("¿Cuántos números se van a introducir?"));
    let suma = 0;
    let resultado = "";

    if (cantidad > 0) {
        for (let i = 1; i <= cantidad; i++) {
            let numero = parseFloat(prompt(`Introduce el número ${i} (puede ser decimal):`));
            suma += numero;
        }
        resultado = `La suma total de los ${cantidad} números es: ${suma}`;
    } else {
        resultado = "Introduce una cantidad válida mayor que cero.";
    }

    solu.innerHTML = resultado;
}

function ejercicio9() {
    let inicio = parseInt(prompt("Introduce el primer número entero:"));
    let fin = parseInt(prompt("Introduce el segundo número entero:"));
    let suma = 0;
    let resultado = "";

    let menor = Math.min(inicio, fin);
    let mayor = Math.max(inicio, fin);

    for (let i = menor; i <= mayor; i++) {
        suma += i;
    }

    resultado = `La suma de todos los enteros desde ${menor} hasta ${mayor} es: ${suma}`;
    solu.innerHTML = resultado;
}

function ejercicio10() {
    let cantidad = parseInt(prompt("¿Cuántos números se van a introducir?"));
    let resultado = "";

    if (cantidad > 0) {
        let suma = 0;
        let primero = parseFloat(prompt("Introduce el número 1:"));
        let mayor = primero;
        let menor = primero;
        suma += primero;

        for (let i = 2; i <= cantidad; i++) {
            let actual = parseFloat(prompt(`Introduce el número ${i}:`));
            suma += actual;

            if (actual > mayor) {
                mayor = actual;
            }
            if (actual < menor) {
                menor = actual;
            }
        }

        let media = suma / cantidad;

        resultado = `Resultados para los ${cantidad} números introducidos:<br>
                        Número mayor: ${mayor}<br>
                        Número menor: ${menor}<br>
                        Media aritmética: ${media.toFixed(2)}`;
    } else {
        resultado = "Introduce una cantidad válida mayor que cero.";
    }

    solu.innerHTML = resultado;
}