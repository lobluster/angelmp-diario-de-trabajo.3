let solu = document.querySelector("#solucion")
function ejercicio1() {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]
    let salida = ""
    for (let i = 0; i < meses.length; i++) {
        salida += meses[i]+", "
    }
    solu.textContent = salida
}

function ejercicio2() {
    var max=5;
    var Personas = [];
    for (i=0; i<max; i++) {
        Personas[i]=[];
    }
    Personas[0][0]="Juan Programmer";
    Personas[0][1]=100;
    Personas[1][0]="Peter Analyst";
    Personas[1][1]=200;
    Personas[2][0]="Andrés HardwareMan";
    Personas[2][1]=300;
    Personas[3][0]="Steve Jobs";
    Personas[3][1]=100000;
    Personas[4][0]="Bill Gates";
    Personas[4][1]=1000000000;
    for (i=0; i<max; i++) {
        document.write(Personas[i][0] + " tiene " + Personas[i][1] + " Euros en su bolsillo" + "<br/>");
    }
    solu.textContent = salida
}

function ejercicio3() {
    let palabras = new Array('botella', 'zeta', 'androide', 'minuto');
    let salida = "";
    
    palabras.sort();

    for (let i = 0; i < palabras.length; i++) {
        salida += palabras[i] + "\n";
    }
    
    solu.textContent = salida;
}

function ejercicio4() {
    let palabras = [];
    let palabra = "";

    // 1. Pedir palabras hasta que el usuario escriba "FIN"
    do {
        palabra = prompt("Introduce una palabra (escribe FIN para terminar):");
        
        // Verificamos que el usuario no haya cancelado y que no sea "FIN"
        if (palabra !== null && palabra.trim().toUpperCase() !== "FIN") {
            palabras.push(palabra.trim());
        }
    } while (palabra !== null && palabra.trim().toUpperCase() !== "FIN");

    // Si no introduce ninguna palabra
    if (palabras.length === 0) {
        solu.textContent = "No se introdujo ninguna palabra.";
        return;
    }

    // 2. Extraer los datos solicitados
    let primera = palabras[0];                                // a. Primera palabra
    let ultima = palabras[palabras.length - 1];               // b. Última palabra
    let total = palabras.length;                              // c. Número de palabras
    let ordenadas = [...palabras].sort().join(", ");          // d. Copia ordenada alfabéticamente

    // 3. Preparar el texto de salida
    let salida = "a. Primera palabra: " + primera + "\n" +
                 "b. Última palabra: " + ultima + "\n" +
                 "c. Número de palabras: " + total + "\n" +
                 "d. Ordenadas alfabéticamente: " + ordenadas;

    // 4. Mostrar en pantalla
    solu.textContent = salida;
}

function ejercicio5() {
    // 1. Array inicial de 20 números (con algunos repetidos a propósito)
    let num = [5, 12, 3, 5, 8, 20, 12, 7, 3, 14, 9, 2, 6, 8, 20, 1, 4, 15, 1, 10];
    
    // 2. Eliminar duplicados usando Set
    // El Set elimina los repetidos y los corchetes con '...' vuelven a convertirlo en array
    let unicos = [...new Set(num)];

    // 3. Preparar el texto de salida
    let salida = "Array original (" + num.length + " elementos):\n" + num.join(", ") + "\n\n" +
                 "Array sin repetir (" + unicos.length + " elementos):\n" + unicos.join(", ");

    // 4. Mostrar el resultado
    solu.textContent = salida;
}

function ejercicio6() {
    let num = [12, 5, 8, 3, 20, 7, 14, 9, 2, 6];
    
    let sumaPares = 0;
    let sumaImpares = 0;
    let salida = "";

    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            sumaPares += num[i];
        } else {
            sumaImpares += num[i];
        }
    }

    salida = "Suma de los números pares: " + sumaPares + "\n" + 
             "Suma de los números impares: " + sumaImpares;

    solu.textContent = salida;
}

function ejercicio7() {
    let num = [12, 5, 8, 3, 20, 7, 14, 9, 2, 6];
    let suma = 0;
    let media = 0;
    let mayor = 0;
    let menor = 0;
    let salida = "";

    for (let i = 1; i < num.length; i++) {
        if (num[i] > mayor) {
            mayor = num[i];
        }
    }

    for (let i = 1; i < num.length; i++) {
        if (num[i] < menor) {
            menor = num[i];
        }
    }
    
    solu.textContent = "El número menor es: "+ mayor + menor;
}

function ejercicio7() {
    let num = [12, 5, 8, 3, 20, 7, 14, 9, 2, 6];
    
    let suma = 0;
    let mayor = num[0];
    let menor = num[0];
    let salida = "";

    for (let i = 0; i < num.length; i++) {
        suma += num[i];

        if (num[i] > mayor) {
            mayor = num[i];
        }

        if (num[i] < menor) {
            menor = num[i];
        }
    }

    let media = suma / num.length;

    salida = "Suma: " + suma + "\n" +
             "Media: " + media + "\n" +
             "Mayor: " + mayor + "\n" +
             "Menor: " + menor;

    solu.textContent = salida;
}

function ejercicio8() {
    // 1. Definimos los dos arrays de la misma longitud
    let A = ['A0', 'A1', 'A2', 'A3'];
    let B = ['B0', 'B1', 'B2', 'B3'];
    
    // Array resultante donde guardaremos la combinación
    let C = [];
    let salida = "";

    // 2. Recorremos los arrays (al tener la misma longitud, sirve A.length)
    for (let i = 0; i < A.length; i++) {
        C.push(A[i]); // Añadimos el elemento de A
        C.push(B[i]); // Añadimos el elemento de B
    }

    // 3. Preparamos el texto para mostrarlo en 'solu'
    salida = "Array combinado: " + C.join(", ");

    // 4. Mostramos el resultado
    solu.textContent = salida;
}