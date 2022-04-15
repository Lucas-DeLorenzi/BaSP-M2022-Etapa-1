/*

1. Variables y Operadores
    a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en
     una 3er variable.
    b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
    c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
    resultado de la suma en una 3er variable (utilizar length).

*/

console.log("1. Variables y Operadores");

//  a.

console.log(
  "   a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable."
);
var num1 = 10;
var num2 = 15;
var sum = num1 + num2;
console.log("   num1 + num2: " + sum);

//  b.

console.log(
  "   b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable."
);
var str1 = "Hola ";
var str2 = "js!";
var concatStr = str1 + str2;
console.log("   str1 + str2: " + concatStr);

//  c.

console.log(
  "   c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length)."
);
var str3 = "Buenas";
var str4 = "Tardes";
var sumLen = str3.length + str4.length;
console.log(
  "   longitud de str3 + longitud de str4: " +
    sumLen +
    "\n************************************************"
);
