let base = Number(prompt("Ingrese la base de la potencia"));
let exponente = Number(prompt("Ingrese el exponente"));

function calcularPotencia(base: number, exponente: number): number {
  let numero: number = 1;
  if (exponente === 0) {
    return 1;
  } else {
    for (let i: number = 1; i <= exponente; i++) {
      numero = numero * base;
    }
    return numero;
  }
}
console.log("La potencia es: ", calcularPotencia(base, exponente));
