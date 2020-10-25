//  6-a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a,b){
    return a+b;
}
console.log(suma(25,9));
//  6-b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
var x=suma;
function suma(a,b){
    if(typeof(a)!= Number || typeof(b)!= Number){
        alert("Parameter not allowed");
        return NaN;
    }
    else{
        return a+b;
    } 
}
console.log(x);
//  6-c)Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
function validate (a){
    if (isNaN(a)){
        
    }
}