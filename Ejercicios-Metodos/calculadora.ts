let operador1: number = Number(prompt("Ingrese el primer número:")); //document.getElementById("dato1");
let operador2: number = Number(prompt("Ingrese el segundo número:")); //document.getElementById("dato2");
function guiones() {
  //declarando la funcion
  let guion = "";
  for (let i = 0; i <= 40; i++) guion = guion + "-";

  console.log(guion);
}

//btnDatos1.addEventListener("click", () => {
console.log("Operador 1: " + operador1);
//});

//btnDatos2.addEventListener("click", () => {
console.log("Operador 2: " + operador2);
//});

//sumar.addEventListener("click", () => {
guiones(); //llamando la funcion
let suma: number = Number(operador1) + Number(operador2);
console.log("El resultado es: ", suma);
guiones(); //llamando la función
