let numero: number = Number(prompt("Ingresar un número"));
//let numeroMinimo: number;
let contador: boolean = false;

while (numero !== 0) {
  let numeroMinimo: number = numero;
  let numeroMaximo: number = numero;
  contador = true;
  if (numero < numeroMinimo) {
    let numeroMinimo: number = numero;
  }
  numero = Number(prompt("Ingresar un número"));
  if (contador) {
    console.log("El mínimo es:", numeroMaximo);
  }
}
