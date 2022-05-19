let numero: number = Number(prompt("Ingresar un número"));
let numeroMaximo: number;
let contador: boolean = false;

while (numero !== 0);
{
  contador = true;
  if (numero > numeroMaximo) {
    numeroMaximo = numero;
  }
  numero = Number(prompt("Ingresar un número"));
  if (contador) {
    console.log("El máximo es:", numeroMaximo);
  }
}
