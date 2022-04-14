/*

1. Variables y Operadores
    a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
     una 3er variable.
    b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
    c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
    resultado de la suma en una 3er variable (utilizar length).

*/

//  a.

var num1 = 10;
var num2 = 15;
var sum = num1 + num2;

//  b.

var str1 = 'Hola ';
var str2 = 'js!';
var concat = str1 + str2;

//  c.

var str3 = 'Buenas';
var str4 = 'Tardes';
var sumChar = str3.length + str4.length;

console.log(sum, concat, sumChar);