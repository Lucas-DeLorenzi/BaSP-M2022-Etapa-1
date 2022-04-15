/*
2. Strings
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
    toUpperCase).
    b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
    caracteres guardando el resultado en una nueva variable (utilizar substring).
    c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
    caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

console.log("2. Strings");

//  a.

console.log(
  "   a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)."
);
var str5 = "lorem justo";
var str5Upper = str5.toLocaleUpperCase();
console.log("str5 en mayúsculas: " + str5Upper);

//  b.

console.log(
  "   b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring)."
);
var str6 = "lorem ipsum dolor sit amet orci aliquam";
var subStr6 = str6.substring(0, 5);
console.log("   Cinco primeros caracteres de str6: " + subStr6);

//  c.

console.log(
  "   c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring)."
);
var str7 = "consectetur adipiscing elit";
var last3 = str7.substring(str7.length - 3);
console.log(
  "   Últimos 3 caracteres de str7: " +
    last3 +
    "\n************************************************"
);
