let numero1 = Number(prompt("Ingrese el primer número"));
let numero2 = Number(prompt("Ingrese el segundo número"));

function calcularMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}
if (calcularMultiplo(numero1, numero2)) {
  console.log(numero1, "Es múltiplo de", numero2);
} else {
  console.log(numero1, "No es múltiplo de", numero2);
}
