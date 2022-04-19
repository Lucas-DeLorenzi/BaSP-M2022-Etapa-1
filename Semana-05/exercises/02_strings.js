/*
2. Strings
    a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar
    toUpperCase).
    b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
    caracteres guardando el resultado en una nueva variable (utilizar substring).
    c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 
    caracteres guardando el resultado en una nueva variable (utilizar substring).
    d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en 
    mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
    toLowerCase y el operador +).
    e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
    primer espacio en blanco y guardarla en una variable (utilizar indexOf).
    f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
    Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas 
    palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el 
    operador +).

*/

console.log("2. Strings");

//  a.

console.log(
  "   a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase)."
);

var str5 = "lorem justo";
var str5Upper = str5.toUpperCase();

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

console.log("   Últimos 3 caracteres de str7: " + last3);

//  d.

console.log(
  "   d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +)."
);

var str8 = "etiam Maximus ipsum";
var capitalizeStr8 =
  str8.toUpperCase().substring(0, 1) + str8.toLowerCase().substring(1);

console.log("   str8 con la primera letra mayúscula: " + capitalizeStr8);

//  e.

console.log(
  "   e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf)."
);

var str9 = "auctor facilisis";
var emptySpaceIndex = str9.indexOf(" ");

console.log(
  "   Índice del primer espacio en blanco en str9: " + emptySpaceIndex
);

//  f.

console.log(
  "   f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +)."
);

var str10 = "vestibulum metus";
var capitalizeStr10 =
  str10.substring(0, 1).toUpperCase() +
  str10.substring(1, str10.indexOf(" ")).toLowerCase() +
  str10.substring(str10.indexOf(" "), str10.indexOf(" ") + 2).toUpperCase() +
  str10.substring(str10.indexOf(" ") + 2).toLowerCase();
  
console.log(
  "   str10 con la primera letra de c/palabra mayúscula: " +
    capitalizeStr10 +
    "\n************************************************"
);
