//  2-a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var sentenc="I like playing soccer";
sentenc.toUpperCase();
//  2-b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var txt="My name is Nicolas Lobos";
var newTxt=txt.substring(0,5)
//  2-c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var txt2="My favourite sport is soccer";
console.log(txt2.length);
var newTxt2=txt2.substring(25,28);
//  2-d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var sent="i like pizza";
console.log(sent.length);
var nueva=sent.substring(0,1).toUpperCase()+sent.substring(1,12).toLowerCase();
//  2-e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
var love = "my first time using indexOf";
var num=love.indexOf(" ");
//  2-f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var line="welcome developer";
var nw=line.substring(0,1).toUpperCase()+line.substring(1,7).toLowerCase()+" "+line.substring(8,9).toUpperCase()+line.substring(9,17);