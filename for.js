//  5-a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var days=["monday","tuesday","wednesday","thursday","friday"];
var i;
for(i=0;i<days.length;i++){
    alert(days[i]);
}
//  5-b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var days=["monday","tuesday","wednesday","thursday","friday"];
var i;
for(i=0;i<days.length;i++){
    alert(days[i].substring(0,1).toUpperCase()+days[i].slice(1).toLowerCase());
}
//  5-c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence=[];
var days=["monday","tuesday","wednesday","thursday","friday"];
var i;
for(i=0;i<days.length;i++){
    sentence+=days[i];
}
alert(sentence);
//  5-d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
var emptArr = [];
var i;
for(i=0;i<10;i++){
    emptArr+=i;
}
console.log(emptArr);