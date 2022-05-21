let multiplicador: number = Number(
  prompt("Ingrese el número para calcular su tabla de multiplicar")
);
let multiplicando: number = Number(
  prompt("Ingresar hasta qué número quiere multiplicar")
);

let contador: number;
let resultado: number;

for (contador = 0, contador <= multiplicando, contador++) {
  resultado = multiplicador * contador;
  console.log(multiplicador, "x", contador, "=", resultado);
}
