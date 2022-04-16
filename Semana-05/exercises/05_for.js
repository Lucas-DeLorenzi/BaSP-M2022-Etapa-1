/*
5. For
    a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar 
    una alerta utilizando cada una de las palabras.
    b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra 
    modificada.
    c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un 
    bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la 
    cadena completa.
    d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es 
    decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 
    hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).
*/

console.log("5. For");

//  a.

console.log(
  "   a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras."
);
var words = ["lorem", "ipsum", "dolor", "sit", "amet"];
for (i = 0; i < words.length; i++) {
  alert(words[i]);
  console.log("   Palabra " + (i + 1) + ": " + words[i]);
}

//  b.

console.log(
  "   b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada."
);
var wordsCopy = [];
for (i = 0; i < words.length; i++) {
  wordsCopy[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
  alert(wordsCopy[i]);
  console.log("   Palabra " + (i + 1) + ": " + wordsCopy[i]);
}

//  c.

console.log(
  "   c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa."
);
var sentence = "";
for (i = 0; i < words.length; i++) {
  sentence += words[i] + " ";
}
alert(sentence);
console.log("   sentence: " + sentence);

//  d.

console.log(
  "   d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log)."
);
var repNum = [];
for (i = 0; i < 10; i++) {
  repNum[i] = i;
}
console.log(
  "   repNum: " + repNum + "\n************************************************"
);
