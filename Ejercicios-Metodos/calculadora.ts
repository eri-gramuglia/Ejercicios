let operador1 = Number(prompt("Ingrese el primer número:"));
let operador2 = Number(prompt("Ingrese el segundo número:"));
let opcionMenu = Number(prompt("Ingrese 1 para sumar o 2 para restar:"));

function guiones() {
  //declarando la funcion
  let guion = "";
  for (let i = 0; i <= 50; i++) guion = guion + "-";
  console.log(guion);
}
function calcularResultado(
  operador1: number,
  operador2: number,
  opcionMenu: number
): number {
  //declarando la funcion
  let resultado: number = 0;
  if (opcionMenu === 1) {
    resultado = operador1 + operador2;
  } else if (opcionMenu === 2) {
    resultado = operador1 - operador2;
  }
  return resultado;
}

console.log("Operador 1: " + operador1);
console.log("Operador 2: " + operador2);

let resultado = calcularResultado(operador1, operador2, opcionMenu);
guiones(); //llamando la funcion
console.log("El resultado de la operacion es: ", resultado); //imprime el resultado que devuelve la funcion
guiones(); //llamando la función
