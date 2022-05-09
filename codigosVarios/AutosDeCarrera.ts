let vuelta1: number = Number(prompt("ingrese el tiempo de la vuelta 1"));
let vuelta2: number = Number(prompt("ingrese el tiempo de la vuelta 2"));
let vuelta3: number = Number(prompt("ingrese el tiempo de la vuelta 3"));
let vuelta4: number = Number(prompt("ingrese el tiempo de la vuelta 4"));

let tiempoTotal: number = vuelta1 + vuelta2 + vuelta3 + vuelta4;
console.log("el tiempo total es: " + tiempoTotal + " " + "minutos");
let promedioVueltas: number = tiempoTotal / 4;
console.log("el promedio de vuelta es: " + promedioVueltas);
