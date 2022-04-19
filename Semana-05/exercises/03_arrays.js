/*
3. Arrays
    a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
    "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).
    b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
    c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
    d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
    e. Invertir el orden del array (utilizar reverse).
    f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
    g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
*/

console.log("3. Arrays");

//  a.

console.log(
  "   a. Dado el siguiente array: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'] mostrar por consola los meses 5 y 11 (utilizar console.log)."
);

var months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

console.log("   Mes 5: " + months[5 - 1] + ". Mes 11: " + months[11 - 1]);

//  b.

console.log(
  "   b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)."
);

var monthsCopy = months.slice();
monthsCopy.sort();

console.log("   Meses ordenados alfabéticamente: " + monthsCopy);

//  c.

console.log(
  "   c. Agregar un elemento al principio y al final del array (utilizar unshift y push)."
);

months.unshift("2022");
months.push("2023");

console.log("   Agregar elementos al comienzo y final de months: " + months);

//  d.

console.log(
  "   d. Quitar un elemento del principio y del final del array (utilizar shift y pop)."
);

months.shift();
months.pop();

console.log("   Quitar primer elemento y último en months: " + months);

//  e.

console.log("   e. Invertir el orden del array (utilizar reverse).");

var reversedMonths = months.slice();
reversedMonths.reverse();

console.log("   months en orden inverso: " + reversedMonths);

//  f.

console.log(
  "   f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join)."
);

monthsJoin = months.join("-");

console.log(
  "   Unión de los elementos de month guión de por medio: " + monthsJoin
);

//  g.

console.log(
  "   g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)."
);

var subMonths = months.slice(
  months.indexOf("Mayo"),
  months.indexOf("Diciembre")
);

console.log(
  "   Copia de months que contiene de Mayo a Noviembre: " +
    subMonths +
    "\n************************************************"
);
