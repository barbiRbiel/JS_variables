// VARIABLES

let nombre = prompt ("¡Hola! Antes de calcular tu promedio... como te llamas? :)")
let numero1 = prompt("Para calcular el promedio de 8 materias, inserte su °1era nota:");
let numero2 = prompt("Inserte su °2da nota:");
let numero3 = prompt("Inserte su °3era nota:");
let numero4 = prompt("Inserte su °4ta nota:");
let numero5 = prompt("Inserte su °5ta nota:");
let numero6 = prompt("Inserte su °6ta nota:");
let numero7 = prompt("Inserte su °7ma nota:");
let numero8 = prompt("Inserte su °8ta nota:");

let dato1Numerico = parseInt (numero1);
let dato2Numerico = parseInt (numero2);
let dato3Numerico = parseInt (numero3);
let dato4Numerico = parseInt (numero4);
let dato5Numerico = parseInt (numero5);
let dato6Numerico = parseInt (numero6);
let dato7Numerico = parseInt (numero7);
let dato8Numerico = parseInt (numero8);
let resultado = (dato1Numerico + dato2Numerico + dato3Numerico + dato4Numerico + dato5Numerico + dato6Numerico + dato7Numerico + dato8Numerico) / 8;
alert("Tú" + " " + "promedio" + " " + "final" + " "  + "es" + " " + "de" + " " + resultado);