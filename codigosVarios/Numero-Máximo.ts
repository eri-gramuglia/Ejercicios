let numero: number = Number(prompt("Ingresar un número"));
let numeroMaximo: number = 0;
let contador: boolean = false;

while (numero !== 0) {
  numero = Number(prompt("Ingresar un número"));
  contador = true;
  let numeroMaximo: number;

  if (numero > numeroMaximo) numeroMaximo = numero;
}
if (contador) console.log("El máximo es:", numeroMaximo);
