/*
6. Funciones
    a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el 
    resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
    b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, 
    mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
    c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
    d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que 
    haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
    e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando 
    que todo siga funcionando igual.
*/

console.log("6. Funciones");

//  a.

console.log(
  "   a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador."
);

function sum(num1, num2) {
  return num1 + num2;
}

var num1 = Math.round(Math.random() * 100);
var num2 = Math.round(Math.random() * 100);
var executeSum = sum(num1, num2);

console.log("   num1: " + num1 + "   num2: " + num2);
console.log("   executeSum: " + executeSum);

//  b.

console.log(
  "   b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado."
);

num2 = "blanco";

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert(
      typeof num1 !== "number"
        ? "Error: num1 no es un número"
        : "Error: num2 no es un número"
    );
    return NaN;
  } else {
    return num1 + num2;
  }
}

var executeSum = sum(num1, num2);

console.log("   num1: " + num1 + "  num2: " + num2);
console.log("   Resultado de sum: " + executeSum);

//  c.

console.log(
  "   c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero."
);

function validateInt(a) {
  return a % 1 == 0;
}

console.log(
  "   El nro ingresado es entero?: " + validateInt(prompt("Ingrese un nro:"))
);

//  d.

console.log(
  "   d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado)."
);

num2 = 30.5;

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert(
      typeof num1 !== "number"
        ? "Error: num1 no es un número"
        : "Error: num2 no es un número"
    );
    return NaN;
  } else if (validateInt(num1) && validateInt(num2)) {
    return num1 + num2;
  } else {
    alert(
      "Error: Los nros deben ser enteros. El resultado de la suma será redondeado."
    );
    return Math.round(num1 + num2);
  }
}

executeSum = sum(num1, num2);

console.log("   num1: " + num1 + "  num2: " + num2);
console.log("   El resultado de sum es: " + executeSum);

//  e.

console.log(
  "   e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual."
);

num1 = 33.8;
num2 = 45;

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    alert(
      typeof num1 !== "number"
        ? "Error: num1 no es un número"
        : "Error: num2 no es un número"
    );
    return NaN;
  } else {
    return validateIntInSum(num1, num2);
  }
}

function validateIntInSum(num1, num2) {
  if (validateInt(num1) && validateInt(num2)) {
    return num1 + num2;
  } else {
    alert(
      "Error: Los nros deben ser enteros. El resultado de la suma será redondeado."
    );
    return Math.round(num1 + num2);
  }
}

executeSum = sum(num1, num2);

console.log("   num1: " + num1 + "  num2: " + num2);
console.log(
  "   El resultado de sum es: " +
    executeSum +
    "\n************************************************"
);
