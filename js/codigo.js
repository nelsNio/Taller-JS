function ejercicio1() {
    var nombre;
    var edad = 0;
    var aux = 0;
    nombre = prompt("Ingresa tu nombre");
    edad = prompt("Ingresa tu edad", "0");
    aux = parseInt(edad) + 1;
    alert("Hola " + nombre + ", tienes " + edad + " años y el año que viene tendrás " + aux + " años.");
}

/**Ejercicio 2 */
function ejercicio2() {
    var opcion;
    var x1 = 0;
    var x2 = 0;
    var res = 0;
    opcion = prompt("Selecciona la figura geometrica:\n1. Triángulo\n2. Rectángulo\n3. Círculo");

    if (opcion == 1) {
        x1 = prompt("Ingresa el valor de base para el triángulo");
        x2 = prompt("Ingresa el valor de altura para el triángulo");
        res = parseInt(x1) * parseInt(x2) / 2;
        alert("El area del triángulo es " + res);
    } else if (opcion == 2) {
        x1 = prompt("Ingresa el valor de base para el rectángulo");
        x2 = prompt("Ingresa el valor de altura para el rectángulo");
        res = parseInt(x1) * parseInt(x2);
        alert("El area del rectángulo es " + res);
    } else if (opcion == 3) {
        x1 = prompt("Ingresa el valor del radio para el círculo");
        res = Math.PI * Math.pow(parseInt(x1), 2);
        alert("El area del círculo es " + res);
    }
}
/**Ejercicio 2 */

/**Ejercicio 3 */

function ejercicio3() {
    var numero;
    var res;
    alert("Pare ver el resultado de esto ejercicio  recomienda abrir la consola.!");
    numero = prompt("Ingrese un numero");
    res = parseInt(numero);

    for (var i = 1; i <= res; i++) {
        console.log(i, par(i));
    }

}

function par(num) {
    return num % 2 ? "- es impar" : "- es par";
}

/**Ejercicio 3 */

/**Ejercicio 4 */
function ejercicio4() {
    var aux;
    var primo;
    aux = parseInt(prompt("Ingrese un numero"));
    i = 2;
    primo = true;

    do {
        if (aux % i == 0) {
            primo = false;
        }
        i++;
    } while (i < aux);

    if (primo == true) {
        alert("El numero " + aux + " es primo");
    } else {
        alert("El numero " + aux + " no es primo");
    }

}
/**Ejercicio 4 */

/**Ejercicio 5 */
function ejercicio5() {
    var aux;
    var total = 1;
    aux = parseInt(prompt("Ingrese un numero mayor que cero (0)"));


    for (i = 1; i <= aux; i++) {
        total = total * i;
    }
    alert("El factorial de " + aux + " es: " + total);
}
/**Ejercicio 5 */

/**Ejercicio 6 */
function ejercicio6() {
    alert("Pare ver el resultado de esto ejercicio  recomienda abrir la consola.!");
    var numero;
    var total = 0;

    if (total <= 50) {
        console.log("Numeros introducidos:");
        for (var i = 0; i < 60; i++) {
            if (total <= 50) {
                numero = parseInt(prompt("Ingrese un numero: "));
                if (total + numero <= 50) {
                    total = total + numero;
                    console.log(i, numero);
                } else {
                    console.log("Total acumulado:", total);
                    break;
                } if (total >= 50 && numero + total >= 50) {
                    console.log("Total acumulado:", total);
                    break;
                }
            } else {
                break;
            }
        }
    }

}
/**Ejercicio 6 */

/**Ejercicio 7 */
function ejercicio7() {
    alert("Pare ver el resultado de esto ejercicio  recomienda abrir la consola.!");
    var numeros = [1, 2, 3, 4, 5];
    var num, aleatorio;
    var pares = [];
    var impares = [];
    for (var i = 0; i < numeros.length; i++) {
        aleatorio = Math.round(Math.random() * (100 - 1) + 1);
        num = numeros[i] * aleatorio;
        console.log(numeros[i], "x", aleatorio, "=", num);

        if (num % 2) {
            impares.push(num);
        } else {
            pares.push(num);
        }

    }
    console.log("Lista de pares");
    for (var i = 0; i < pares.length; i++) {
        console.log(pares[i]);
    }
    console.log("Lista de impares");
    for (var i = 0; i < impares.length; i++) {
        console.log(impares[i]);
    }
}
/**Ejercicio 7 */

/**Ejercicio 8 */
function ejercicio8() {

    var dni = parseInt(prompt("Ingrese un numero"));
    alert("La letra que corresponde es: " + "TRWAGMYFPDXBNJZSQVHLCKET".charAt(dni % 23));
}
/**Ejercicio 8 */

/**Ejercicio 9 */
function ejercicio9() {
    var palabra = prompt("Ingrese una palabra");
    var vocales;
    var total;
    var consonantes;
    total = palabra.length;
    vocales = palabra.match(/[aeiouAEIOU]/gi).length;
    consonantes = total-vocales;

    console.log("Numero de consonantes", consonantes);
    console.log("Numero de vocales", vocales);
    console.log("Longitud de la palabra", total);

    alert("Numero de consonantes " + consonantes + ", Numero de vocales " + vocales + " Longitud de la palabra " + total );

}
/**Ejercicio 9 */