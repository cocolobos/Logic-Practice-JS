//  6-a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a,b){
    return a+b;
}
console.log(suma(25,9));
//  6-b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function suma(a,b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return a+b;
    }
    else{
        alert("Parameter not allowed");
        return NaN;
    } 
}
//  6-c)Crear una función validate integer que reciba un número como parámetro y verdadero si es un número entero.
function validate (a){
    if (Number.isInteger(a)){
        return true;
    }
    else{
        return false;
    }
}
//  6-d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
function suma(a,b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        if(!validate(a)){
            a=Math.round(a);
            alert("The first parameter wasn't an integer but was coverted");
        }
        if(!validate(b)){
            b=Math.round(b);
            alert("The second parameter wasn't an integer but was converted");
        }
        return a+b;
    }
    else{
        alert("Parameter not allowed");
        return NaN;
    } 
}
//  6-e)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function newVali(a,b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        return true;
    }
    else{
        alert("Parameter not allowed");
        return false;
    } 
}
function suma(a,b){
    if(newVali(a,b));
    return a + b;
}