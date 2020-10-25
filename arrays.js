//  3-a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthArr[4]);
console.log(monthArr[10]);
//  3-b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(monthArr.sort());
//  3-c)Agregar un elemento al principio y al final del array (utilizar unshift y push).
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthArr.unshift("Monday");
monthArr.push("Sunday");
//  3-d)Quitar un elemento del principio y del final del array (utilizar shift y pop).
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthArr.shift();
monthArr.pop();
//  3-e)Invertir el orden del array (utilizar reverse)
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
monthArr.reverse();
//  3-f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var newArr = monthArr.join(" - ");
//  3-g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var monthArr = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var shortArr = monthArr.slice(4,11);