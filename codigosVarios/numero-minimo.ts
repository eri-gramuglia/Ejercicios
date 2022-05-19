let numero: number = Number(prompt("Ingresar un número"));
let numeroMinimo: number;
let contador: boolean = false;

while (numero !== 0);
{
  contador = true;
  if (numero < numeroMinimo) {
    numeroMinimo = numero;
  }
  numero = Number(prompt("Ingresar un número"));
  if (contador) {
    console.log("El mínimo es:", numeroMaximo);
  }
}
